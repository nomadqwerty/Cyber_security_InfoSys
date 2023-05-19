import { Fragment, useState } from "react";
import styles from "./css/navigation.module.css";

const menuOptions = [
  "Cyber-security",
  "Cyber-threats",
  "Pentesting",
  "intrusion-detection",
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
    "Cybercrime",
    "Cyber attack",
    "Cyber terrorism",
    "Malware",
    "Trojan Horse",
    "BOTNET",
  ],
  Pentesting: [
    "Phases of penetration tests",
    "Types of penetration tests",
    "Penetration testing tools",
  ],
  "intrusion-detection": [
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

  return <div>what</div>;
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
        <WhatIsCyberSec option={info} />
      </div>
    </div>
  );
};

export default NavigationBar;
