import { Fragment, useState } from "react";
import styles from "./css/navigation.module.css";

const menuOptions = [
  "Cyber-security",
  "Cyber-threats",
  "Pentesting",
  "Intrusion-detection",
];

const subcategoryObj = {
  "Cyber-security": [
    "What is cyber security?",
    "Layers of cyber security",
    "The digital world",
    "cyber space",
    "functionality of cyber security",
  ],
  "Cyber-threats": [
    "Cyber crime",
    "Cyber attack",
    "Cyber terrorism",
    "Malicious software",
    "Trojan Horse",
    "Bot Net",
  ],
  Pentesting: [
    "penetration testing",
    "Phases of penetration tests",
    "Types of penetration tests",
    "Penetration testing tools",
  ],
  "Intrusion-detection": [
    "Intrusion detection",
    "Types of intrusion prevention",
    "Intrusion detection system Methods",
  ],
};

const whatIsCsec = {
  "what is cyber security?":
    "The technique of protecting internet-connected systems such as computers, servers, mobile devices, electronic systems, networks, and data from malicious attacks is known as cybersecurity. We can divide cybersecurity into two parts one is cyber, and the other is security. Cyber refers to the technology that includes systems, networks, programs, and data. And security is concerned with the protection of systems, networks, applications, and information. In some cases, it is also called electronic information security or information technology security.",
  "layers of cyber security": {
    "human layer":
      "This layer deals with the human behavior towards the system and how they protect the system's data. To increase security in this layer, humans should be completely aware of the harm that threats can pose to the system. They should have sound security practices, such as using strong passwords, detecting phishing attempts, and tackling threats if the system is breached. Concisely, this layer incorporates the management controls of the users.",

    "perimeter security layer":
      "This is the exchange point where other devices or networks retrieve and access all the data. This includes all the devices connected to a particular network. It ensures that both the physical and digital security mechanisms protect the system, mainly implemented using firewalls, intrusion detection systems, and others. ",

    "network layer":
      "This is the layer where all the related security features are placed to protect the network from unauthorized access. Restricted access is given to the user so that if there is some attack, it is not fatal for the whole network and is restricted to only that network domain.",

    "application security layer":
      "This layer controls access to an application, that application's access to the system's data, and its security. To guarantee security at this layer, applications should install their latest version to be as secure as possible (new versions have minor bugs fixed if present). ",

    "endpoint security layer":
      "This layer ensures that the threats do not exploit the endpoints (the devices). An example is installing antivirus software to protect mobile devices, desktops, and laptops. This layer can either be implemented on the network or cloud, depending on the requirement of the system. Endpoint encryption is the basis of security on this layer, ensuring that devices run in a secure environment.",

    "data security layer":
      "This layer is where security mechanisms are implemented to protect data transfer and storage. Backup security measures can be used to prevent the loss of data. For example, disk encryption and two-factor authentication protect the transfer of data and archiving for storage. ",

    "mission-critical assets":
      "This is the data (user credentials, personal and critical information) that is most critical to protect for which all the security measures are maintained and designed. Users can have regular backups and recovery plans to secure their data",
  },
  "the digital world":
    "The notion of the digital world comprises the entirety of all individual phenomena that can be described by the concept of digital signals – including all their aspects of information processing and of graphical information interpretation into virtual worlds – or that can be influenced or transformed through the means of digital signals.",
  "cyber space":
    "Cyberspace is a concept describing a widespread interconnected digital technology. [The expression dates] from the first decade of the diffusion of the internet. It refers to the online world as a world 'apart,' as distinct from everyday reality.",

  "functionality of cyber security": {
    "introduction paragraph":
      "Cyber security is a concept that entails the technologies, processes, and methods of defending computer systems, networks and data from attack. It can be divided into subcategories which offer specialized security to each area of concentration.",

    "network specified security":
      "Network specified security is a sector of cybersecurity concerned with the protection of internal networks as well as preventing unauthorized access to personal or organizational networks. This involves monitoring network traffic and implementing various network policies to alert the network team of any unauthorized access.Policies that help in network security include the implementation of extra login details and the use of antivirus programs or firewalls. Every security measure in an organization that maintains the integrity of the organization’s network is network specified security.",

    "application specified security":
      "Application specified security is a type of security that is concerned with maintaining the integrity of the applications used on mobile phones and other devices. Software and hardware are used to avoid loopholes during the development of applications. This is to ensure that the applications are not easily attacked when they are in use. Application specified security tends to maintain the integrity of most applications used by consumers as well as organizations.",

    "cloud specified security":
      "Cloud specified security is concerned with protecting every resource stored in the cloud-base of an organization. In cloud specified security, software-based tools are used to monitor the data kept in the cloud. Cloud security helps grant users easy access without location constraints, and it maintains the integrity of the resources stored in the cloud space.",

    "critical infrastructure specified security":
      "Critical infrastructures consist of physical system with internet access, which plays a vital role in running the day to day activities of society. Water purification systems, traffic light regulation systems, and hospital patient care systems are some examples of critical infrastructures. Critical infrastructure specified security is concerned with providing safety for these various vital systems from malicious attacks. An attack on any of the systems could cause great loss to society because these systms are immensely important.",

    "internet of things specified security":
      "The Internet of Things (IoT) consists of a variety of devices with an internet-based connection. This can include sensors, televisions, and appliances used in homes and offices. IoT specified security is an aspect of cyber security that is concerned with protecting these internet-based devices that are readily used by consumers and organizations.IoT devices can be easily hacked where the control of a device is taken from the owner. This is the reason the adoption of IoT devices has been slow. Everything on the internet could be at great risk, so the safety of devices with internet access is very important.",
  },
};

const cyberThreats = {
  "cyber crime":
    "Cybercrime is a crime involving a computer or computer network. The computer may have been used in committing the crime, or it may be the target. Cybercrime may harm someone's security or finances.",
  "cyber attack":
    "A cyber-attack is an exploitation of computer systems and networks. It uses malicious code to alter computer code, logic or data and lead to cybercrimes, such as information and identity theft.",
  "cyber terrorism":
    "Cyberterrorism is the use of the Internet to conduct violent acts that result in, or threaten, the loss of life or significant bodily harm, in order to achieve political or ideological gains through threat or intimidation. Acts of deliberate, large-scale disruption of computer networks, especially of personal computers attached to the Internet by means of tools such as computer viruses, computer worms, phishing, malicious software, hardware methods, and programming scripts can all be forms of internet terrorism",
  "malicious software":
    "Malicious software (MalWare) is any software intentionally designed to cause disruption to a computer, server, client, or computer network, leak private information, gain unauthorized access to information or systems, deprive access to information, or which unknowingly interferes with the user's computer security and privacy.",
  "trojan horse":
    "a Trojan horse is any malware that misleads users of its true intent by disguising itself as a standard program. The term is derived from the ancient Greek story of the deceptive Trojan Horse that led to the fall of the city of Troy.",
  "bot net":
    "A botnet is a group of Internet-connected devices, each of which runs one or more bots. Botnets can be used to perform Distributed Denial-of-Service (DDoS) attacks, steal data, send spam, and allow the attacker to access the device and its connection. The owner can control the botnet using command and control (C&C) software.",
};

const penTesting = {
  "penetration testing":
    "A penetration test (pen test) is an authorized simulated attack performed on a computer system to evaluate its security. Penetration testers use the same tools, techniques, and processes as attackers to find and demonstrate the business impacts of weaknesses in a system.",
  "phases of penetration tests": {
    "introduction paragraph":
      "There are five penetration testing phases: reconnaissance, scanning, vulnerability assessment, exploitation, and reporting. Let’s take a closer look at the 5 Penetration Testing phases.",

    "reconnaissance phase":
      "The first penetration testing phase is reconnaissance. In this phase, the tester gathers as much information about the target system as they can, including information about the network topology, operating systems and applications, user accounts, and other relevant information. The goal is to gather as much data as possible so that the tester can plan an effective attack strategy.Reconnaissance can be categorized as either active or passive depending on what methods are used to gather information (Braithwaite, 2022). Passive reconnaissance pulls information from resources that are already publicly available, whereas active reconnaissance involves directly interacting with the target system to gain information. Typically, both methods are necessary to form a full picture of the target’s vulnerabilities.",

    "scanning phase":
      "Once all the relevant data has been gathered in the reconnaissance phase, it’s time to move on to scanning. In this penetration testing phase, the tester uses various tools to identify open ports and check network traffic on the target system. Because open ports are potential entry points for attackers, penetration testers need to identify as many open ports as possible for the next penetration testing phase. This step can also be performed outside of penetration testing; in those cases, it’s referred to simply as vulnerability scanning and is usually an automated process. However, there are drawbacks to only performing a scan without a full penetration test—namely, scanning can identify a potential threat but cannot determine the level at which hackers can gain access (Agio, 2022). So, while scanning is essential for cybersecurity, it also needs human intervention in the form of penetration testers to reach its full potential.",

    "vulnerability assessment":
      "The third penetration testing phase is vulnerability assessment, in which the tester uses all the data gathered in the reconnaissance and scanning phases to identify potential vulnerabilities and determine whether they can be exploited. Much like scanning, vulnerability assessment is a useful tool on its own but is more powerful when combined with the other penetration testing phases. When determining the risk of discovered vulnerabilities during this stage, penetration testers have many resources to turn to. One is the National Vulnerability Database (NVD), a repository of vulnerability management data created and maintained by the U.S. government that analyzes the software vulnerabilities published in the Common Vulnerabilities and Exposures (CVE) database. The NVD rates the severity of known vulnerabilities using the Common Vulnerability Scoring System (CVSS).",

    "exploitation phase":
      "Once vulnerabilities have been identified, it’s time for exploitation. In this penetration testing phase, the penetration tester attempts to access the target system and exploit the identified vulnerabilities, typically by using a tool like Metasploit to simulate real-world attacks.This is perhaps the most delicate penetration testing phase because accessing the target system requires bypassing security restrictions. Though system crashes during penetration testing are rare, testers must still be cautious to ensure that the system isn’t compromised or damaged (Basu, 2022).",

    "reporting findings":
      "Once the exploitation phase is complete, the tester prepares a report documenting the penetration test’s findings. The report generated in this final penetration testing phase can be used to fix any vulnerabilities found in the system and improve the organization’s security posture. Building a penetration testing report requires clearly documenting vulnerabilities and putting them into context so that the organization can remediate its security risks. The most useful reports include sections for a detailed outline of uncovered vulnerabilities (including CVSS scores), a business impact assessment, an explanation of the exploitation phase’s difficulty, a technical risk briefing, remediation advice, and strategic recommendations (Sharma, 2022).",
  },
  "types of penetration tests": {
    "introduction paragraph":
      "There are five main types of penetration test, each of which focuses on different security vulnerabilities and uses a unique set of tools. Understanding the different forms of penetration testing is essential in ensuring that you can find the appropriate test to suit your needs.",

    "network penetration test":
      "In a network penetration test, the penetration tester audits a network environment for security vulnerabilities. Network penetration tests can be further subdivided into two categories: external tests and internal tests. An external penetration test involves testing public IP addresses, whereas an internal test provides the tester with network access so that they can emulate a hacker who has already penetrated the network’s defenses. Penetration testers focus on the following areas in network penetration tests: Firewall configuration, Firewall bypass testing, Stateful inspection analysis, Intrusion prevention system deception, DNS-level attacks",

    "web application penetration test":
      "In a web application penetration test, testers search for security problems associated with the insecure design, development, or coding of a web app. These types of tests focus on browsers, websites, web applications, and related items, including plug-ins, procedures, and applets.",

    "client side penetration test":
      "Client-side penetration tests identify security vulnerabilities within an organization. These are often located in the programs and applications the organization uses, such as email platforms, web browsers, and Adobe Acrobat.Hackers may, for example, gain access to a vulnerable application through a well-crafted email directing an employee to a malicious webpage or load malware onto a USB stick that can execute the malware once it is inserted into a device. Client-side penetration tests aim to identify these risks and address all related internal vulnerabilities.",

    "social engineering penetration test":
      "Social engineering penetration tests focus on the human aspect of an organization’s security. In a social engineering test, testers attempt to deceive employees into giving up sensitive information or allowing the tester access to the organization’s systems. This enables penetration testers to understand the organization’s vulnerability to scams or other social engineering cyberattacks.Testers often use phishing scams as part of social engineering tests. Physical testing may be another aspect of a social engineering test: Penetration testers can attempt to gain access to a secured building or location for which they don’t have clearance by taking advantage of employees’ ignorance of security protocols.",
  },
  "penetration testing tools": {
    "introduction paragraph":
      "There are many different penetration testing tools available, and each has its strengths and weaknesses. Listed below are just a few of the many penetration testing tools available (Aboagye, 2021). As a penetration tester, it’s essential to be familiar with as many of them as possible so that you can choose the right tool for each penetration testing phase. ",
    "n map":
      "Nmap is a powerful network scanning tool that can scan for open ports and services. It also includes features for identifying vulnerable applications.",

    "meta sploit":
      "Metasploit is a vulnerability exploitation tool. It includes a library of exploits for a variety of programs and operating systems, as well as a wizard that can assist penetration testers in capitalizing on known vulnerabilities.",

    "wire shark":
      "Wireshark is a network analysis tool that can capture packet data from a network and decode it into readable form. This can be useful for identifying malicious traffic or sensitive information being transmitted over a network",
    "burp suite":
      "Burp Suite is an all-in-one web application security testing tool. It can scan websites for vulnerabilities, manipulate requests and responses, and intercept traffic between the client and server",
  },
};

const intrusionDetection = {
  "intrusion detection":
    "An intrusion detection system (IDS; also intrusion prevention system or IPS) is a device or software application that monitors a network or systems for malicious activity or policy violations. Any intrusion activity or violation is typically reported either to an administrator or collected centrally using a security information and event management (SIEM) system. A SIEM system combines outputs from multiple sources and uses alarm filtering techniques to distinguish malicious activity from false alarms.",

  "types of intrusion prevention": {
    "introduction paragraph":
      "Although all intrusion detection systems fulfill the same purpose, they work in slightly different ways. Altogether, there are five IDS types. Let’s explore the details, advantages, and drawbacks of each one.",

    "network intrusion detection system":
      "A Network Intrusion Detection System (NIDS) is a solution that monitors your entire network through one or more touchpoints. To use a NIDS, you generally need to install it on a piece of hardware within your network infrastructure. Once installed, your NIDS will sample every packet (a collection of data) that passes through it. Your typical NIDS can examine all the traffic that goes through it. With that said, you may not want to analyze everything that comes through your NIDS, as you could end up missing an intrusion attempt due to information overload. To combat this issue, most NIDSs allow you to create a set of “rules” that define the type of packets your NIDS will pick up and store. Rules let you hone in on certain types of traffic, but they also require some knowledge of the NIDS’ syntax.",

    "network node intrusion detection system":
      "A Network Node Intrusion Detection System (NNIDS) is technically a variation of a NIDS, but since it works differently, we’ll consider it a different type of IDS. A NNIDS also analyzes the packets that pass through it. However, instead of relying on a central device to monitor all network traffic, the system watches over each node connected to your network",

    "host intrusion detection system":
      "A Host Intrusion Detection System (HIDS) takes the device independence of NNIDS one step further. With a HIDS, you can install IDS software on every device connected to your network. HIDSs work by taking “snapshots” of their assigned device. By comparing the most recent snapshot to past records, the HIDS can identify the differences that could indicate an intrusion.",

    "protocol based intrusion detection system":
      "A Protocol-Based Intrusion Detection System (PIDS) is a specific IDS that monitors the protocol in use. In practice, this system typically analyzes the HTTP or HTTPS protocol stream between your devices and the server. In most cases, a PIDS will go at the front end of a server. The system can protect your web server by monitoring inbound and outbound traffic. Because they focus on the protocol (the way devices transmit information within a network), PIDSs aren’t necessarily a comprehensive IDS solution. However, they can augment an already robust cybersecurity solution.",

    "application protocol based intrusion detection system":
      "An Application Protocol-Based Intrusion Detection System (APIDS) is a type of IDS that specializes in software app security. Typically associated with host-based intrusion detection systems (HIDS), APIDSs monitor the communications that occur between applications and the server. An APIDS is typically installed on groups of servers.As with a PIDS, an APIDS is unlikely to solve all of your network monitoring needs. Still, it can complement other types of IDS.",
  },
  "intrusion detection system methods": {
    "introduction paragraph":
      "Depending on the type of intrusion detection system you choose, your security solution will rely on a few different detection methods to keep you safe. Here’s a brief rundown of each one.",

    "signature based Intrusion detection":
      "Signature-Based Intrusion Detection Systems (SIDS) aim to identify patterns and match them with known signs of intrusions. A SIDS relies on a database of previous intrusions. If activity within your network matches the “signature” of an attack or breach from the database, the detection system notifies your administrator. Since the database is the backbone of a SIDS solution, frequent database updates are essential, as SIDS can only identify attacks it recognizes. As a result, if your organization becomes the target of a never before seen intrusion technique, no amount of database updates will protect you.",

    "anomaly based intrusion detection":
      "On the other hand, an Anomaly-Based Intrusion Detection System (AIDS) can identify these new zero-day intrusions. An SIDS uses machine learning (ML) and statistical data to create a model of “normal” behavior. Anytime traffic deviates from this typical behavior, the system flags it as suspicious. The primary issue with AIDS vs. SIDS is the potential for false positives. After all, not all changes are the result of malicious activity; some are simply indications of changes in organizational behavior. But because a SIDS has no database of known attacks to reference, it may report any and all anomalies as intrusions.",

    "hybrid intrusion detection":
      "A hybrid system combines the best of both worlds. By looking at patterns and one-off events, a Hybrid Intrusion Detection system can flag new and existing intrusion strategies. The only downside to a hybrid system is the even bigger uptick in flagged issues. However, considering that the purpose of an IDS is to flag potential intrusions, it’s hard to see this increase in flags as a negative.",
  },
};

const Subcategory = ({ option, setOption, setInfo }) => {
  const subcatOpts = subcategoryObj[option];
  const subcatList = subcatOpts.map((e, i) => {
    return (
      <li key={i} className={styles.sublistItem}>
        <p
          onClick={() => {
            setInfo(e);
          }}
        >
          {e}
        </p>
      </li>
    );
  });

  return (
    <div className={styles.menu}>
      <ul className={styles.sublist}>{subcatList ? subcatList : ""}</ul>
      <div className={styles.close}>
        <button
          onClick={() => {
            setOption(null);
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
};

//////////////////////////////////////////////////////////////////////////// options components

const WhatIsCyberSec = (option) => {
  const opt = option?.option;
  const lowerOpt = opt?.toLowerCase();
  console.log(lowerOpt);
  const value = whatIsCsec[String(lowerOpt)];
  if (typeof value === "string") {
    console.log(value);
    return (
      <div>
        <h1>{String(opt)}</h1>
        <p>{value}</p>
      </div>
    );
  } else {
    if (typeof value === "object") {
      console.log(value);
      let items = [];
      for (let key in value) {
        items.push({ id: String(key), value: value[String(key)] });
      }
      const list = items.map((e, i) => {
        return (
          <li key={i}>
            <div>
              <h1>{e.id}</h1>
              <p>{e.value}</p>
            </div>
          </li>
        );
      });

      return (
        <div className={styles.whatIsCsec}>
          <ul>{list}</ul>
        </div>
      );
    }
  }

  return <div></div>;
};

const CyberThreats = ({ option }) => {
  const opt = option.toLowerCase();
  const data = cyberThreats[String(opt)];
  console.log(data);
  if (data) {
    return (
      <div>
        <h1>{option}</h1>
        <p>{data}</p>
      </div>
    );
  }
};

const PenTest = ({ option }) => {
  const opt = option?.toLowerCase();
  const data = penTesting[String(opt)];
  if (typeof data === "string") {
    return (
      <div>
        <h1>{option}</h1>
        <p>{data}</p>
      </div>
    );
  } else {
    if (typeof data === "object") {
      let items = [];
      for (let key in data) {
        items.push({ id: String(key), value: data[String(key)] });
      }
      console.log(items);
      const list = items.map((e, i) => {
        return (
          <li key={i}>
            <div>
              <h1>{e.id}</h1>
              <p>{e.value}</p>
            </div>
          </li>
        );
      });

      return (
        <div className={styles.whatIsCsec}>
          <ul>{list}</ul>
        </div>
      );
    }
  }
};

const IntruDet = ({ option }) => {
  const opt = option?.toLowerCase();
  const data = intrusionDetection[String(opt)];
  if (typeof data === "string") {
    return (
      <div>
        <h1>{option}</h1>
        <p>{data}</p>
      </div>
    );
  } else {
    if (typeof data === "object") {
      let items = [];
      for (let key in data) {
        items.push({ id: String(key), value: data[String(key)] });
      }
      console.log(items);
      const list = items.map((e, i) => {
        return (
          <li key={i}>
            <div>
              <h1>{e.id}</h1>
              <p>{e.value}</p>
            </div>
          </li>
        );
      });

      return (
        <div className={styles.whatIsCsec}>
          <ul>{list}</ul>
        </div>
      );
    }
  }
};
//////////////////////////////////////////////////////////////////////////////////

const NavigationBar = () => {
  const [option, setOption] = useState(null);
  const [info, setInfo] = useState(null);

  const listItem = menuOptions.map((e, i) => {
    return (
      <li key={i} className={styles.listItem}>
        <p
          onClick={() => {
            setOption(e);
          }}
        >
          {e}
        </p>
      </li>
    );
  });
  return (
    <div style={{ width: "100vw", overflow: "hidden" }}>
      <div className={styles.navBarWrap}>
        <div className={styles.headerTextWrap}>
          <h1 className={styles.headerText}>Cyber Security InfoSys.</h1>
        </div>
        <div className={styles.listWrap}>
          <ul className={styles.listUl}>{listItem}</ul>
        </div>
      </div>

      {!option ? null : (
        <Subcategory option={option} setOption={setOption} setInfo={setInfo} />
      )}

      <div className={styles.infoTab}>
        {(() => {
          if (option === "Cyber-security") {
            return <WhatIsCyberSec option={info} />;
          }
          if (option === "Cyber-threats") {
            return <CyberThreats option={info} />;
          }
          if (option === "Pentesting") {
            return <PenTest option={info} />;
          }
          if (option === "Intrusion-detection") {
            return <IntruDet option={info} />;
          }
        })()}
      </div>
    </div>
  );
};

export default NavigationBar;
