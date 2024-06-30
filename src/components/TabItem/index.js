import './index.css'

const TabItem = props => {
  const {tabDetails, onTabClick, isActive} = props
  const {tabId, displayText} = tabDetails

  const onChangeTabItem = () => {
    onTabClick(tabId)
  }

  const activeBtnClassName = isActive ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        className={`tab-btn ${activeBtnClassName}`}
        onClick={onChangeTabItem}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
