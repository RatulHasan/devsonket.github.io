import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import { FiPrinter } from "react-icons/fi"
import SearchResult from "./searchresult"
import { ThinContainer, Description } from "./common"
import SocialShare from "./socialshare"
import Contributors from "./contributors"

const IntroItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 100px 0;
  padding-bottom: 140px;
  .print-btn {
    a {
      display: flex;
      align-items: center;
      font-weight: 800;
      text-decoration: none;
      background: ${props =>
        props.islightcolor === "true"
          ? "var(--accentlight)"
          : "var(--accentdark)"};
      color: ${props =>
        props.islightcolor === "true"
          ? "var(--accentdark)"
          : "var(--accentlight)"};
      padding: 5px 15px;
      font-weight: 400;
      border-radius: 8px;
      svg {
        margin-right: 5px;
      }
    }
  }
`

const IntroItem = ({
  data: { id, title, description },
  islightcolor,
  contributors,
}) => {
  return (
    <ThinContainer>
      <IntroItemContainer islightcolor={islightcolor}>
        <Description
          title={title}
          description={description}
          islightcolor={islightcolor}
        />
        <Contributors islightcolor={islightcolor} contributors={contributors} />
        <SocialShare
          id={id}
          description={description}
          islightcolor={islightcolor}
        />
        <p className="print-btn">
          <Link to="/">
            <FiPrinter /> প্রিন্ট করুন
          </Link>
        </p>
      </IntroItemContainer>
    </ThinContainer>
  )
}

export default IntroItem
