import {
  CanTarLogo, BFondLogo, DFGLogo, WTZLogo, EKFSLogo, ESMOLogo,
  WSGLogo, UMEALogo, UMEHLogo, YaleLogo, ForbeckLogo, GLASSLogo,
  NCTLogo, JSTLogo, ENLogo, IKLogo, SFBLogo, DHKLogo
} from "../components/LogoName";

const network = [
  { id: "umeh", title: "UMEH", logo: UMEHLogo, url: "https://www.uni-essen-haematologie.de/" },
  { id: "esmo", title: "ESMO", logo: ESMOLogo, url: "https://www.esmo.org/" },
  { id: "nct", title: "NCT", logo: NCTLogo, url: "https://nct.dkfz.de/en/nct.html" },
  { id: "yale", title: "Yale", logo: YaleLogo, url: "https://www.yale.edu/" },
  { id: "wtz", title: "WTZ", logo: WTZLogo, url: "https://wtz-essen.de/" },
  { id: "glass", title: "GLASS", logo: GLASSLogo, url: "https://www.glass-consortium.org/" },
  { id: "ikim", title: "IKIM", logo: IKLogo, url: "https://www.ikim.uk-essen.de/" },
  { id: "dhk", title: "DHK", logo: DHKLogo, url: "#" },
  { id: "sfb", title: "SFB", logo: SFBLogo, url: "https://sfb1530.de/" },
  { id: "cantar-network", title: "CANTAR", logo: CanTarLogo, url: "https://land.nrw/pressemitteilung/81-millionen-euro-landesfoerderung-fuer-fuenf-exzellente-forschungsnetzwerke" }
];

const funding = [
  { id: "bif", title: "Boehringer Ingelheim Fonds", logo: BFondLogo, url: "https://www.bifonds.de/index.html" },
  { id: "cantar-funding", title: "CANTAR", logo: CanTarLogo, url: "https://land.nrw/pressemitteilung/81-millionen-euro-landesfoerderung-fuer-fuenf-exzellente-forschungsnetzwerke" },
  { id: "dfg", title: "DFG", logo: DFGLogo, url: "https://www.dfg.de/" },
  { id: "ekfs", title: "EKFS", logo: EKFSLogo, url: "https://www.ekfs.de/" },
  { id: "wsg", title: "Walter Siegenthaler Gesellschaft", logo: WSGLogo, url: "https://siegenthaler-gesellschaft.de/" },
  { id: "forbeck", title: "Forbeck", logo: ForbeckLogo, url: "https://www.wgfrf.org/" },
  { id: "umea", title: "UMEA", logo: UMEALogo, url: "https://www.uni-due.de/med/umea/" },
  { id: "jackstaedt", title: "Jackstädt Foundation", logo: JSTLogo, url: "https://www.jackstaedt-stiftung.de" },
  { id: "emmy-noether", title: "Emmy Noether Programme", logo: ENLogo, url: "https://www.dfg.de/de/foerderung/foerdermoeglichkeiten/programme/einzelfoerderung/emmy-noether" }
];

// These two groups determine the stable order of the page sections.
export const networkGroups = [
  { id: "network", title: "Collaborations & Network", items: network },
  { id: "funding", title: "Funding", items: funding }
];
