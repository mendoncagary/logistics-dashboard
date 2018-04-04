package main

import (
	"crypto/tls"
	"crypto/x509"
	"encoding/json"
	"fmt"
	"log"
	"math/rand"
	"net"
	"time"

	geo "github.com/martinlindhe/google-geolocate"
)

// Device struct
type Device struct {
	Name      string  `json:"name"`
	Type      int     `json:"type"`
	Latitude  float64 `json:"latitude"`
	Longitude float64 `json:"longitude"`
	UtcTime   int32   `json:"utctime"`
	Status    string  `json:"status"`
	Speed     int     `json:"speed"`
}

func doEvery(d time.Duration, conn net.Conn) {

	//API key
	client := geo.NewGoogleGeo("AIzaSyAPfO1_8SiMkOAu4efzxLQQFgIJhBhO7SM")

	for x := range time.Tick(d) {
		//		f(x, conn)

		res, _ := client.Geolocate()
		//fmt.Println(res.Lat)
		//fmt.Println(res.Lng)
		//Output: &{ 40.7127837 -74.0059413}

		deviceJSON, err := json.Marshal(Device{
			Name:      "Device-002",
			Type:      1,
			Latitude:  res.Lat,
			Longitude: res.Lng,
			UtcTime:   int32(time.Now().Unix()),
			Status:    "0x0A",
			Speed:     rand.Intn(100),
		})
		if err != nil {
			log.Fatalf("json problem %s", err)
		}
		fmt.Println(string(deviceJSON))
		//n, err := io.WriteString(conn, message+"device:"+deviceIdentity+latitude+longitude+utcTime+status+speed)
		n, error := conn.Write(deviceJSON)
		if error != nil {
			log.Fatalf("client: write: %s", error)
		}
		log.Printf("client: wrote %q (%d bytes) %v", deviceJSON, n, x)

	}
}

func main() {
	cert, err := tls.LoadX509KeyPair("../certs/client.pem", "../certs/client.key")
	if err != nil {
		log.Fatalf("server: loadkeys: %s", err)
	}
	config := tls.Config{Certificates: []tls.Certificate{cert}, InsecureSkipVerify: true}
	conn, err := tls.Dial("tcp", "127.0.0.1:8000", &config)
	if err != nil {
		log.Fatalf("client: dial: %s", err)
	}
	defer conn.Close()
	log.Println("client: connected to: ", conn.RemoteAddr())

	state := conn.ConnectionState()
	for _, v := range state.PeerCertificates {
		fmt.Println(x509.MarshalPKIXPublicKey(v.PublicKey))
		fmt.Println(v.Subject)
	}
	log.Println("client: handshake: ", state.HandshakeComplete)
	log.Println("client: mutual: ", state.NegotiatedProtocolIsMutual)

	doEvery(10*time.Second, conn)

}
