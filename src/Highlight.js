import React from "react"

function norm(str) {
  return (typeof str === "string" && str.toLowerCase().replace(/[éèê]/gi, "e")) || ""
}

const HighLight = ({ text, query, style }) => {
  if (!text) {
    return null
  }
  const placeholderStyle = {
    pointerEvents: "none",
    position: "relative",
    top: -21,
    left: 3,
    color: "silver",
    ...style
  }
  const queryStyle = { color: "black" }
  const pos = text && norm(text).indexOf(norm(query))
  let before = null
  let after = (query && text && query.length < text.length && text.slice(query.length)) || null
  if (pos && pos > -1) {
    before = text.slice(0, pos)
    after = text.slice(pos + query.length)
  }
  const fixedQuery = before ? query.toLowerCase() : query

  //return <div style={ placeholderStyle }><span style={queryStyle}>{text}</span></div>
  return (
    <div style={placeholderStyle}>
      {before}
      <span style={queryStyle}>{fixedQuery}</span>
      {after}
    </div>
  )
}

export default HighLight
