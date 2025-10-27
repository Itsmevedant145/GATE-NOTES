import React, { useState } from 'react';
import { Wifi, ChevronDown, ChevronRight, Network, Globe, Shield, Radio, Server, Link, Cloud, CheckCircle } from 'lucide-react';

const CNNotes = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [completedTopics, setCompletedTopics] = useState({});

  const toggleSection = (section) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const toggleCompleted = (topic) => {
    setCompletedTopics(prev => ({
      ...prev,
      [topic]: !prev[topic]
    }));
  };

  const topics = [
    {
      id: 'osi-model',
      title: 'OSI & TCP/IP Model',
      icon: <Network className="w-5 h-5" />,
      content: [
        {
          subtitle: 'OSI Model (7 Layers)',
          points: [
            'Layer 7 - Application: HTTP, FTP, SMTP, DNS (User interface)',
            'Layer 6 - Presentation: Encryption, compression, translation',
            'Layer 5 - Session: Session establishment, maintenance, termination',
            'Layer 4 - Transport: TCP, UDP (End-to-end communication)',
            'Layer 3 - Network: IP, Routing (Logical addressing)',
            'Layer 2 - Data Link: MAC, Switching (Frame, Error detection)',
            'Layer 1 - Physical: Cables, signals (Bits transmission)',
            'Mnemonic: All People Seem To Need Data Processing'
          ]
        },
        {
          subtitle: 'TCP/IP Model (4 Layers)',
          points: [
            'Application Layer: Combines OSI Application + Presentation + Session',
            'Transport Layer: TCP, UDP (same as OSI)',
            'Internet Layer: IP, ICMP, ARP (same as OSI Network)',
            'Network Access Layer: Combines OSI Data Link + Physical',
            'More practical and widely used than OSI'
          ]
        },
        {
          subtitle: 'Data Units',
          points: [
            'Application: Data/Message',
            'Transport: Segment (TCP) / Datagram (UDP)',
            'Network: Packet',
            'Data Link: Frame',
            'Physical: Bits',
            'Each layer adds its own header (encapsulation)'
          ]
        }
      ]
    },
    {
      id: 'physical-layer',
      title: 'Physical Layer',
      icon: <Radio className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Transmission Media',
          points: [
            'Guided: Twisted pair, Coaxial cable, Fiber optic',
            'Unguided: Radio waves, Microwaves, Infrared',
            'Twisted Pair: UTP (Unshielded) and STP (Shielded)',
            'Coaxial: Better shielding, higher bandwidth than twisted pair',
            'Fiber Optic: Light signals, immune to EMI, long distance, expensive',
            'Wireless: Flexible, convenient, lower security'
          ]
        },
        {
          subtitle: 'Transmission Modes',
          points: [
            'Simplex: One direction only (TV broadcast)',
            'Half Duplex: Both directions but one at a time (Walkie-talkie)',
            'Full Duplex: Both directions simultaneously (Telephone)',
            'Bandwidth: Range of frequencies, measured in Hz',
            'Throughput: Actual data rate achieved',
            'Latency: Time delay in transmission'
          ]
        },
        {
          subtitle: 'Multiplexing',
          points: [
            'FDM (Frequency Division): Different frequencies',
            'TDM (Time Division): Different time slots',
            'WDM (Wavelength Division): Different wavelengths (fiber optic)',
            'CDMA (Code Division): Different codes',
            'Used to share single medium among multiple users'
          ]
        },
        {
          subtitle: 'Switching Techniques',
          points: [
            'Circuit Switching: Dedicated path (telephone)',
            'Packet Switching: Data in packets (internet)',
            'Message Switching: Store and forward (email)',
            'Packet Switching types: Datagram (connectionless), Virtual Circuit (connection-oriented)'
          ]
        }
      ]
    },
    {
      id: 'data-link',
      title: 'Data Link Layer',
      icon: <Link className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Functions',
          points: [
            'Framing: Break bit stream into frames',
            'Physical Addressing: MAC address (48 bits)',
            'Error Detection: CRC, Parity, Checksum',
            'Error Correction: Hamming code',
            'Flow Control: Regulate data rate',
            'Access Control: Who can use the medium'
          ]
        },
        {
          subtitle: 'Error Detection',
          points: [
            'Parity Bit: Add 1 bit, detects single bit error',
            'Checksum: Sum of data, detects errors',
            'CRC (Cyclic Redundancy Check): Polynomial division, detects burst errors',
            'CRC most reliable, widely used in Ethernet',
            'Error detection doesn\'t fix errors, just detects them'
          ]
        },
        {
          subtitle: 'Flow Control Protocols',
          points: [
            'Stop-and-Wait: Send one frame, wait for ACK',
            'Efficiency: 1 / (1 + 2a) where a = Tp/Tt',
            'Go-Back-N: Send N frames without ACK, go back on error',
            'Selective Repeat: Retransmit only erroneous frames',
            'Sliding Window: Sender and receiver windows',
            'Window size: Go-Back-N ≤ 2^m - 1, Selective Repeat ≤ 2^(m-1)'
          ]
        },
        {
          subtitle: 'MAC Protocols',
          points: [
            'ALOHA: Transmit anytime, max efficiency 18%',
            'Slotted ALOHA: Time slots, max efficiency 37%',
            'CSMA (Carrier Sense Multiple Access): Listen before transmit',
            'CSMA/CD (Collision Detection): Used in Ethernet, detect collision',
            'CSMA/CA (Collision Avoidance): Used in WiFi, avoid collision',
            'Token Ring: Token passing, no collision'
          ]
        },
        {
          subtitle: 'Ethernet',
          points: [
            'IEEE 802.3 standard',
            'CSMA/CD protocol',
            'Frame: Preamble, Dest MAC, Src MAC, Type, Data, CRC',
            'MAC Address: 48 bits (6 bytes), first 24 bits = OUI',
            'Min frame size: 64 bytes (for collision detection)',
            'Max frame size: 1518 bytes'
          ]
        }
      ]
    },
    {
      id: 'network-layer',
      title: 'Network Layer',
      icon: <Globe className="w-5 h-5" />,
      content: [
        {
          subtitle: 'IPv4 Basics',
          points: [
            '32-bit address, written as 4 octets (w.x.y.z)',
            'Header: 20-60 bytes (20 bytes minimum)',
            'Important fields: Version, IHL, Total Length, TTL, Protocol, Checksum',
            'TTL (Time To Live): Prevents infinite loops, decremented at each router',
            'Protocol field: TCP=6, UDP=17, ICMP=1',
            'Fragmentation: If packet > MTU, split into fragments'
          ]
        },
        {
          subtitle: 'IP Address Classes',
          points: [
            'Class A: 0.0.0.0 to 127.255.255.255 (First bit 0, /8 default)',
            'Class B: 128.0.0.0 to 191.255.255.255 (First bits 10, /16 default)',
            'Class C: 192.0.0.0 to 223.255.255.255 (First bits 110, /24 default)',
            'Class D: 224.0.0.0 to 239.255.255.255 (Multicast)',
            'Class E: 240.0.0.0 to 255.255.255.255 (Reserved)',
            'Loopback: 127.0.0.1',
            'Private: 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16'
          ]
        },
        {
          subtitle: 'Subnetting',
          points: [
            'CIDR Notation: IP/n where n = number of network bits',
            'Subnet Mask: 1s for network, 0s for host',
            'Number of subnets: 2^(borrowed bits)',
            'Number of hosts per subnet: 2^(host bits) - 2',
            'Network address: First address (all host bits 0)',
            'Broadcast address: Last address (all host bits 1)',
            'Valid host range: Network + 1 to Broadcast - 1'
          ]
        },
        {
          subtitle: 'IPv6',
          points: [
            '128-bit address (huge address space)',
            'Written as 8 groups of 4 hex digits',
            'No NAT needed, no broadcast (uses multicast)',
            'Simplified header (fixed 40 bytes)',
            'Built-in security (IPSec)',
            'Auto-configuration support'
          ]
        },
        {
          subtitle: 'Routing Algorithms',
          points: [
            'Distance Vector: RIP, uses Bellman-Ford, shares routing table',
            'Link State: OSPF, uses Dijkstra, shares link state info',
            'Path Vector: BGP, used between AS (Autonomous Systems)',
            'Static Routing: Manual configuration',
            'Dynamic Routing: Automatic route updates',
            'Interior Gateway Protocols: Within AS (RIP, OSPF)',
            'Exterior Gateway Protocols: Between AS (BGP)'
          ]
        },
        {
          subtitle: 'ICMP (Internet Control Message Protocol)',
          points: [
            'Used for error reporting and diagnostics',
            'Ping: Uses ICMP Echo Request/Reply',
            'Traceroute: Uses ICMP Time Exceeded',
            'Messages: Destination unreachable, Time exceeded, Redirect',
            'Works at Network layer but uses IP'
          ]
        },
        {
          subtitle: 'ARP (Address Resolution Protocol)',
          points: [
            'Maps IP address to MAC address',
            'ARP Request: Broadcast to find MAC',
            'ARP Reply: Unicast response with MAC',
            'ARP Cache: Stores IP-MAC mappings',
            'RARP: Reverse ARP (MAC to IP, obsolete)'
          ]
        }
      ]
    },
    {
      id: 'transport-layer',
      title: 'Transport Layer',
      icon: <Server className="w-5 h-5" />,
      content: [
        {
          subtitle: 'TCP (Transmission Control Protocol)',
          points: [
            'Connection-oriented, reliable, ordered delivery',
            'Full duplex, point-to-point',
            'Header: 20-60 bytes (20 minimum)',
            'Segment: Source port, Dest port, Seq#, Ack#, Flags, Window, Checksum',
            'Three-way handshake: SYN → SYN-ACK → ACK',
            'Four-way close: FIN → ACK → FIN → ACK',
            'Flow control: Sliding window',
            'Congestion control: Slow start, congestion avoidance'
          ]
        },
        {
          subtitle: 'UDP (User Datagram Protocol)',
          points: [
            'Connectionless, unreliable, no ordering',
            'Header: 8 bytes (fixed)',
            'Fields: Source port, Dest port, Length, Checksum',
            'No handshake, no connection establishment',
            'Faster than TCP, less overhead',
            'Used for: DNS, DHCP, Streaming, Gaming, VoIP',
            'Application handles reliability if needed'
          ]
        },
        {
          subtitle: 'TCP vs UDP',
          points: [
            'TCP: Reliable, ordered, connection-oriented, slower',
            'UDP: Unreliable, unordered, connectionless, faster',
            'TCP: Error checking and recovery, UDP: Basic error checking',
            'TCP: Flow and congestion control, UDP: None',
            'TCP: Used when reliability critical, UDP: Used when speed critical'
          ]
        },
        {
          subtitle: 'Port Numbers',
          points: [
            'Well-known ports: 0-1023 (HTTP=80, HTTPS=443, FTP=21, SSH=22)',
            'Registered ports: 1024-49151',
            'Dynamic/Private ports: 49152-65535',
            'Socket: IP address + Port number',
            'Identifies specific process on a machine'
          ]
        },
        {
          subtitle: 'TCP Congestion Control',
          points: [
            'Slow Start: Exponential increase (cwnd doubles)',
            'Congestion Avoidance: Linear increase (cwnd += 1)',
            'Fast Retransmit: Retransmit on 3 duplicate ACKs',
            'Fast Recovery: After fast retransmit, reduce cwnd to half',
            'Threshold (ssthresh): Switches from slow start to congestion avoidance',
            'On timeout: ssthresh = cwnd/2, cwnd = 1 (restart slow start)'
          ]
        }
      ]
    },
    {
      id: 'application-layer',
      title: 'Application Layer',
      icon: <Cloud className="w-5 h-5" />,
      content: [
        {
          subtitle: 'DNS (Domain Name System)',
          points: [
            'Translates domain names to IP addresses',
            'Hierarchical: Root → TLD (.com, .org) → Domain (google.com)',
            'Port: 53 (UDP for queries, TCP for zone transfers)',
            'Record Types: A (IPv4), AAAA (IPv6), MX (Mail), CNAME (Alias), NS (Name Server)',
            'Recursive query: DNS server does full resolution',
            'Iterative query: DNS server returns referral',
            'DNS caching: Improves performance'
          ]
        },
        {
          subtitle: 'HTTP (Hypertext Transfer Protocol)',
          points: [
            'Port: 80 (HTTP), 443 (HTTPS)',
            'Request Methods: GET, POST, PUT, DELETE, HEAD, OPTIONS',
            'Status Codes: 1xx Info, 2xx Success, 3xx Redirect, 4xx Client Error, 5xx Server Error',
            'Common: 200 OK, 404 Not Found, 500 Internal Server Error',
            'Stateless protocol (uses cookies for state)',
            'HTTP/1.1: Persistent connections',
            'HTTP/2: Multiplexing, header compression',
            'HTTPS: HTTP + SSL/TLS (encrypted)'
          ]
        },
        {
          subtitle: 'FTP (File Transfer Protocol)',
          points: [
            'Port: 21 (control), 20 (data)',
            'Two connections: Control and Data',
            'Active FTP: Server initiates data connection',
            'Passive FTP: Client initiates data connection',
            'Commands: USER, PASS, GET, PUT, LIST',
            'Not secure (sends password in clear text)',
            'SFTP/FTPS: Secure versions'
          ]
        },
        {
          subtitle: 'SMTP (Simple Mail Transfer Protocol)',
          points: [
            'Sends email (client to server, server to server)',
            'Port: 25 (SMTP), 587 (Submission)',
            'Commands: HELO, MAIL FROM, RCPT TO, DATA, QUIT',
            'Push protocol (sender pushes to server)',
            'POP3 (Port 110): Download emails, delete from server',
            'IMAP (Port 143): Sync emails, keep on server',
            'POP3 vs IMAP: IMAP better for multiple devices'
          ]
        },
        {
          subtitle: 'DHCP (Dynamic Host Configuration Protocol)',
          points: [
            'Automatically assigns IP addresses',
            'Port: 67 (server), 68 (client)',
            'DORA Process: Discover → Offer → Request → Acknowledge',
            'Provides: IP address, Subnet mask, Gateway, DNS server',
            'Lease time: IP assigned for limited time',
            'Uses UDP (connectionless)'
          ]
        },
        {
          subtitle: 'Telnet & SSH',
          points: [
            'Telnet (Port 23): Remote terminal access, NOT secure',
            'SSH (Port 22): Secure Shell, encrypted remote access',
            'SSH uses public key cryptography',
            'SSH preferred over Telnet for security',
            'Both are application layer protocols'
          ]
        }
      ]
    },
    {
      id: 'security',
      title: 'Network Security',
      icon: <Shield className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Security Goals',
          points: [
            'Confidentiality: Information hidden from unauthorized',
            'Integrity: Information not altered',
            'Availability: Information accessible when needed',
            'Authentication: Verify identity',
            'Non-repudiation: Cannot deny action'
          ]
        },
        {
          subtitle: 'Cryptography Basics',
          points: [
            'Symmetric Key: Same key for encryption and decryption (AES, DES)',
            'Asymmetric Key: Public key encrypts, private key decrypts (RSA)',
            'Hash Functions: One-way function (MD5, SHA)',
            'Digital Signature: Private key signs, public key verifies',
            'Symmetric: Faster, Asymmetric: More secure for key exchange'
          ]
        },
        {
          subtitle: 'SSL/TLS',
          points: [
            'Secure Sockets Layer / Transport Layer Security',
            'Provides secure communication over network',
            'Uses both symmetric and asymmetric cryptography',
            'Handshake: Exchange keys, establish secure connection',
            'Certificate: Issued by Certificate Authority (CA)',
            'HTTPS uses SSL/TLS (HTTP over SSL)'
          ]
        },
        {
          subtitle: 'Firewall',
          points: [
            'Filters incoming and outgoing traffic',
            'Packet filtering: Based on header info',
            'Stateful inspection: Tracks connection state',
            'Application gateway: Proxy at application level',
            'Can block based on IP, port, protocol',
            'Positioned at network perimeter'
          ]
        },
        {
          subtitle: 'Common Attacks',
          points: [
            'DDoS: Distributed Denial of Service (overwhelm server)',
            'Man-in-the-Middle: Intercept communication',
            'Phishing: Fake websites to steal credentials',
            'SQL Injection: Inject malicious SQL code',
            'Cross-Site Scripting (XSS): Inject malicious scripts',
            'ARP Spoofing: Fake ARP messages',
            'IP Spoofing: Fake source IP address'
          ]
        }
      ]
    },
    {
      id: 'wireless',
      title: 'Wireless Networks',
      icon: <Wifi className="w-5 h-5" />,
      content: [
        {
          subtitle: 'WiFi (IEEE 802.11)',
          points: [
            'WLAN standards: 802.11a/b/g/n/ac/ax',
            '802.11b: 2.4 GHz, 11 Mbps',
            '802.11g: 2.4 GHz, 54 Mbps',
            '802.11n: 2.4/5 GHz, up to 600 Mbps',
            '802.11ac: 5 GHz, up to 6.9 Gbps',
            'Uses CSMA/CA (collision avoidance)',
            'Hidden terminal problem: Solved by RTS/CTS'
          ]
        },
        {
          subtitle: 'WiFi Security',
          points: [
            'WEP: Wired Equivalent Privacy (weak, crackable)',
            'WPA: WiFi Protected Access (better)',
            'WPA2: Uses AES encryption (current standard)',
            'WPA3: Latest, more secure',
            'Authentication: Open, WEP, WPA-PSK, WPA-Enterprise'
          ]
        },
        {
          subtitle: 'Bluetooth',
          points: [
            'Short-range wireless (IEEE 802.15)',
            'Personal Area Network (PAN)',
            'Frequency: 2.4 GHz ISM band',
            'Range: ~10 meters (Class 2)',
            'Piconet: Master device + up to 7 slaves',
            'Versions: 1.x to 5.x (increasing speed and range)'
          ]
        },
        {
          subtitle: 'Cellular Networks',
          points: [
            '1G: Analog voice',
            '2G: Digital voice (GSM)',
            '3G: Mobile broadband',
            '4G LTE: High-speed data',
            '5G: Ultra-high speed, low latency',
            'Cell towers divide area into cells'
          ]
        }
      ]
    },
    {
      id: 'performance',
      title: 'Network Performance',
      icon: <Server className="w-5 h-5" />,
      content: [
        {
          subtitle: 'Key Metrics',
          points: [
            'Bandwidth: Maximum data rate (bps)',
            'Throughput: Actual data rate achieved',
            'Latency: Time delay (propagation + transmission + queuing + processing)',
            'Jitter: Variation in latency',
            'Packet Loss: Percentage of lost packets',
            'RTT (Round Trip Time): Time for packet to go and come back'
          ]
        },
        {
          subtitle: 'Delay Components',
          points: [
            'Transmission Delay: L/R (packet size / bandwidth)',
            'Propagation Delay: d/s (distance / speed of light)',
            'Queuing Delay: Waiting time in queue',
            'Processing Delay: Router processing time',
            'Total Delay = Transmission + Propagation + Queuing + Processing'
          ]
        },
        {
          subtitle: 'Formulas',
          points: [
            'Efficiency (Stop-and-Wait): 1 / (1 + 2a) where a = Tp/Tt',
            'Utilization: (Useful data transmitted) / (Total time)',
            'Throughput ≤ Bandwidth',
            'Number of bits in link = Bandwidth × Propagation delay',
            'Window size for 100% efficiency: 1 + 2a'
          ]
        }
      ]
    }
  ];

  const progress = Object.keys(completedTopics).filter(k => completedTopics[k]).length;
  const total = topics.length;
  const progressPercent = (progress / total) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 p-6">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <div className="bg-gradient-to-br from-sky-600 to-blue-600 p-4 rounded-xl">
              <Wifi className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold text-gray-800">Computer Networks</h1>
              <p className="text-gray-600 mt-1">Complete Guide for GATE CSE</p>
            </div>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">Progress</span>
              <span className="text-sm font-medium text-sky-600">{progress}/{total} topics</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-gradient-to-r from-sky-600 to-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
        </div>

        {/* Topics */}
        <div className="space-y-4">
          {topics.map((topic) => (
            <div key={topic.id} className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl">
              {/* Topic Header */}
              <div
                onClick={() => toggleSection(topic.id)}
                className="flex items-center justify-between p-6 cursor-pointer bg-gradient-to-r from-gray-50 to-white hover:from-sky-50 hover:to-blue-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-sky-600 to-blue-600 p-3 rounded-lg text-white">
                    {topic.icon}
                  </div>
                  <h2 className="text-xl font-bold text-gray-800">{topic.title}</h2>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleCompleted(topic.id);
                    }}
                    className={`p-2 rounded-lg transition-all ${
                      completedTopics[topic.id]
                        ? 'bg-green-100 text-green-600'
                        : 'bg-gray-100 text-gray-400 hover:bg-gray-200'
                    }`}
                  >
                    <CheckCircle className="w-5 h-5" />
                  </button>
                  {expandedSections[topic.id] ? (
                    <ChevronDown className="w-6 h-6 text-gray-600" />
                  ) : (
                    <ChevronRight className="w-6 h-6 text-gray-600" />
                  )}
                </div>
              </div>

              {/* Topic Content */}
              {expandedSections[topic.id] && (
                <div className="p-6 bg-gray-50 border-t border-gray-200">
                  {topic.content.map((section, idx) => (
                    <div key={idx} className="mb-6 last:mb-0">
                      <h3 className="text-lg font-bold text-sky-900 mb-3 flex items-center gap-2">
                        <span className="w-1.5 h-6 bg-gradient-to-b from-sky-600 to-blue-600 rounded-full"></span>
                        {section.subtitle}
                      </h3>
                      <ul className="space-y-2.5">
                        {section.points.map((point, pidx) => (
                          <li key={pidx} className="flex gap-3 text-gray-700">
                            <span className="text-sky-600 mt-1.5 flex-shrink-0">•</span>
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 bg-gradient-to-r from-sky-600 to-blue-600 rounded-xl p-6 text-white text-center">
          <p className="text-lg font-semibold">🌐 Pro Tip</p>
          <p className="mt-2 text-sky-100">Master subnetting calculations and protocol port numbers - frequently asked in GATE!</p>
        </div>
      </div>
    </div>
  );
};

export default CNNotes;