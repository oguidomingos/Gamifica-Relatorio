import React from 'react'
import PadraoSection from '../../padraoSection'
import { sectionHome } from './data'
import Data from "./data"
import * as S from "./style";
import { FullPageReport } from "./style"

function Report() {
  return (
    <>
      <FullPageReport>
      <PadraoSection {...sectionHome}/>

      </FullPageReport>
      
    </>
  )
}

export default Report;
