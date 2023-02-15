import React, { createContext, useMemo } from 'react'
import PropTypes from 'prop-types';

export const ContabilContext = createContext();

function ContabilProvider({ children }) {

    const values = useMemo(() => ({
    }), [])

  return (
    <ContabilContext.Provider value={ values }>
        {children}
    </ContabilContext.Provider>
  )
}

ContabilProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

export default ContabilProvider