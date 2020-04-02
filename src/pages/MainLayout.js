import React from 'react'
import PropTypes from 'prop-types'
import Header from '../components/header'
import Footer from '../components/footer'

export const MainLayout = ({ children }) => {
  return (
    <div className="h-100">
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired
}
