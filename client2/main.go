package main

import (
	"crypto/tls"
	"crypto/x509"
	"encoding/json"
	"fmt"
	"log"
	"net"
	"strconv"
	"time"

	"github.com/shirou/gopsutil/cpu"
	"github.com/shirou/gopsutil/mem"
)

// Device struct
type Device struct {
	Name     string `json:"name"`
	Type     int    `json:"type"`
	CPUUsage string `json:"cpuusage"`
	RAMUsage string `json:"ramusage"`
	UtcTime  int32  `json:"utctime"`
}

func send(t time.Time, conn net.Conn) {
	// log.Printf("client")

	// defer conn.Close()
	// deviceIdentity := "Device-001"
	// latitude := "7.55"
	// longitude := "6.78"
	// utcTime := "7:00"
	// status := "Hex"
	// speed := "55"
	// message := "Hello"
	// n, err := io.WriteString(conn, message+"device:"+deviceIdentity+latitude+longitude+utcTime+status+speed)
	// if err != nil {
	// 	log.Fatalf("client: write: %s", err)
	// }
	// log.Printf("client: wrote %q (%d bytes)", message, n)

}

func doEvery(d time.Duration, conn net.Conn) {
	// memory

	for x := range time.Tick(d) {
		//		f(x, conn)

		vmStat, err := mem.VirtualMemory()
		dealwithErr(err)

		// cpu - get CPU number of cores and speed
		//cpuStat, err := cpu.Info()
		//dealwithErr(err)
		percentage, err := cpu.Percent(0, false)
		dealwithErr(err)

		deviceJSON, err := json.Marshal(Device{
			Name:     "Device-011",
			Type:     2,
			CPUUsage: strconv.FormatFloat(percentage[0], 'f', 2, 64),
			RAMUsage: strconv.FormatFloat(vmStat.UsedPercent, 'f', 2, 64),
			UtcTime:  int32(time.Now().Unix()),
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

func dealwithErr(err error) {
	if err != nil {
		fmt.Println(err)
		//os.Exit(-1)
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

	doEvery(1*time.Second, conn)

}
