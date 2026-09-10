function SectionTitle({ label, children }) {
  return (
    <>
      <div className="section-label">{label}</div>
      <h2 className="section-title">{children}</h2>
    </>
  )
}

export default SectionTitle
