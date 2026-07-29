import { SiGooglescholar, SiResearchgate } from "react-icons/si";
import { PiMicrosoftOutlookLogoFill } from "react-icons/pi";
import { GrLinkedin } from "react-icons/gr";
import { RiTwitterXLine } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FiGlobe } from "react-icons/fi";

const socialLinks = [
  { key: "email", label: "Email", Icon: PiMicrosoftOutlookLogoFill, hover: "hover:text-red-500" },
  { key: "twitter", label: "X / Twitter", Icon: RiTwitterXLine, hover: "hover:text-gray-950" },
  { key: "scholar", label: "Google Scholar", Icon: SiGooglescholar, hover: "hover:text-blue-500" },
  { key: "researchgate", label: "ResearchGate", Icon: SiResearchgate, hover: "hover:text-green-500" },
  { key: "linkedin", label: "LinkedIn", Icon: GrLinkedin, hover: "hover:text-blue-700" },
  { key: "github", label: "GitHub", Icon: FaGithub, hover: "hover:text-gray-950" },
  { key: "website", label: "Website", Icon: FiGlobe, hover: "hover:text-blue-600" }
];

const MemberCard = ({ member, compact = false }) => (
  <article
    className={
      compact
        ? "flex flex-col sm:flex-row items-center sm:items-start gap-6 bg-white shadow-lg rounded-md p-4 w-full max-w-5xl"
        : "flex flex-col items-center text-center bg-white shadow-xl rounded-lg p-6 w-full max-w-sm h-full"
    }
  >
    <img
      className={
        compact
          ? "w-28 h-28 rounded-full object-cover"
          : "w-40 h-40 rounded-full object-cover bg-white p-1 border border-gray-200 shadow-sm transition-transform duration-200 hover:scale-110"
      }
      src={member.image}
      alt={member.name}
      loading="lazy"
    />

    <div className={compact ? "flex flex-col text-center sm:text-left flex-1" : "flex flex-col items-center flex-1"}>
      <div className={compact ? "mb-2" : "mt-4"}>
        <h3 className={compact ? "text-base font-semibold leading-tight" : "text-lg font-semibold"}>
          {member.name}
        </h3>
        <p className={compact ? "text-cyan-500 text-xs" : "text-cyan-500 text-sm mt-1"}>
          {member.role}
        </p>
      </div>

      <p className={compact ? "text-gray-600 text-sm max-w-3xl" : "text-gray-600 text-sm mt-4"}>
        {member.description}
      </p>

      <div className={`flex gap-4 ${compact ? "justify-center sm:justify-start mt-4" : "justify-center mt-auto pt-6"}`}>
        {member.bsky && (
          <a href={member.bsky} target="_blank" rel="noreferrer" aria-label={`${member.name} Bluesky`}>
            <img src="bluesky.svg" alt="" className="w-5 h-5 opacity-80" />
          </a>
        )}
        {socialLinks.map(({ key, label, Icon, hover }) =>
          member[key] ? (
            <a
              key={key}
              href={member[key]}
              target="_blank"
              rel="noreferrer"
              aria-label={`${member.name} ${label}`}
              title={label}
              className={`text-gray-700 transition ${hover}`}
            >
              <Icon size={20} />
            </a>
          ) : null
        )}
      </div>
    </div>
  </article>
);

export default MemberCard;
