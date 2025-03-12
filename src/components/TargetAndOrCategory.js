import React from 'react'

import {  toTitleCase} from '../formatters'

export default function TargetAndOrCategory({ target, category }) {
  return (
    <div className="target-and-or-category">
      { !!target && (<div className="target text-xl">{toTitleCase(target)}</div>) }
      { !!target && !!category && <div className="or-separator">or</div>}
      { !!category && (<div className="category text-xl">{toTitleCase(category)}</div>) }
    </div>
  )
}
