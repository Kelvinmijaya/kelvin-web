import React, {useEffect, useState} from 'react'
import {useInView} from 'react-intersection-observer'

interface IntersectionObserverProps {
  children: React.ReactNode
}

const IntersectionObserver: React.FC<IntersectionObserverProps> = ({
  children,
}) => {
  const [isVisible, setIsVisible] = useState(false)
  const {ref, inView} = useInView({
    triggerOnce: true,
  })

  useEffect(() => {
    if (inView) {
      setIsVisible(true)
    }
  }, [inView])

  return (
    <div className="flex max-w-3xl flex-col space-y-16" ref={ref}>
      {isVisible ? children : null}
    </div>
  )
}

export default IntersectionObserver
