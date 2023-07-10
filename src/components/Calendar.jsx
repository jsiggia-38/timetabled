import React from "react";
import Event from './Event'

const Calendar = () => {

    return (

        <div className = "Calendar">

            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className = "time">8 am</td>
                        <Event event = 'Pat Talks Sports' location = "studio" color = 'red'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className = "time">9 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event = "Pat Talks Cartoons" location = "bedroom" color = 'brown'/>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className = "time">10 am</td>
                        <td></td>
                        <Event event = "Pat's Podcast" location = "studio" color = 'yellow'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event = "Pat's Thoughts" location = "basement" color = 'pink'/>
                        <Event event = "Pat the NES Punk" location = "basement" color = 'lightblue'/>
                    </tr>
                    <tr>
                        <td className = "time">11 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event = "Pat Talks Movies" location = "basement" color = 'green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className = "time">12 pm</td>
                        <td></td>
                        <td></td>
                        <Event event = "Pat's Conspiracy Corner" location = "bedroom" color = "purple"/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className = "time">1 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className = "time">2 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className = "time">3 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className = "time">4 pm</td>
                        <td></td>
                        <Event event = "Pat Talks TV Shows" location = "basement" color = 'gray'/>
                        <td></td>
                        <Event event = "Pat Talks Games" location = "basement" color = 'blue'/>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td className = "time">5 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>

        </div>

    )

}


export default Calendar;