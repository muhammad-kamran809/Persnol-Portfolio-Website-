import { Code2, FileText, Mail, MessageCircle } from 'lucide-react'
import social from '../data/social'

const links = [
  {
    key: 'githubUrl',
    label: 'GitHub',
    icon: Code2,
    external: true,
  },
  {
    key: 'whatsappUrl',
    label: 'WhatsApp',
    icon: MessageCircle,
    external: true,
  },
  {
    key: 'emailUrl',
    label: 'Email Muhammad Kamran',
    icon: Mail,
    external: true,
  },
]

function SocialLinks() {
  const availableLinks = links.filter(({ key }) => social[key])

  if (!availableLinks.length) return null

  return (
    <nav className="social-links" aria-label="Social links">
      {availableLinks.map(({ key, label, icon: Icon, external }) => (
        <a
          key={key}
          className="social-link"
          href={social[key]}
          aria-label={label}
          {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
        >
          <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
          <span>{label}</span>
        </a>
      ))}
      <button
        className="social-link"
        type="button"
        aria-label="Open CV"
        onClick={() => window.dispatchEvent(new Event('open-cv'))}
      >
        <FileText size={18} strokeWidth={1.8} aria-hidden="true" />
        <span>Open CV</span>
      </button>
    </nav>
  )
}

export default SocialLinks