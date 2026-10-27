import floralCorner from '@/assets/decor/floral-corner-sm.png'
import toran from '@/assets/decor/toran-sm.png'

export function CardDecor() {
  return (
    <>
      <div className="card-decor-florals" aria-hidden="true">
        <img src={floralCorner} alt="" className="decor-floral decor-floral-bl" />
        <img
          src={floralCorner}
          alt=""
          className="decor-floral decor-floral-br"
        />
      </div>
      <img src={toran} alt="" className="decor-toran" aria-hidden="true" />
    </>
  )
}
