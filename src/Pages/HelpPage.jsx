import { Link } from "react-router-dom";

function HelpPage() {
  return (
    <div className="content__help">
      <div className="content__help-inner">
        <h2>Find the exact forecast for your city!</h2>

        <p>How to use: </p>
        <ul>
          <li>You can find the forecast for a city by entering its name in the searching field. The forecast will be shown in the 'Now' tab.</li>
          <li>You can add the city in the favorites list by clicking on the heart button. The city will be added in Locations</li>
          <li>You can delete anytime a city from de favorite list by pressing the X button</li>
          <li>In Details tab, you can find more information about the forecast</li>
          <li>In the Forecast tab is shown the weather for the next 40 days</li>
        </ul>

        <p>Enjoy! :)</p>
      </div>
      <div className="link">
        <Link to="/">Back to the main page!</Link>  
      </div>
    </div>
  )
}

export { HelpPage };