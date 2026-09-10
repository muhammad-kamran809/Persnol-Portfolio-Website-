import { motion, useReducedMotion } from 'framer-motion'

function Button({
  children,
  href,
  variant = 'primary',
  className = '',
  ...props
}) {
  const classes = `${variant}-button ${className}`.trim()
  const reducedMotion = useReducedMotion()
  const motionProps = reducedMotion
    ? {}
    : { whileHover: { y: -2 }, whileTap: { scale: 0.98 } }

  if (href) {
    return (
      <motion.a className={classes} href={href} {...motionProps} {...props}>
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button className={classes} type="button" {...motionProps} {...props}>
      {children}
    </motion.button>
  )
}

export default Button
