import React, { Component } from 'react';

class Map extends Component {
    render() { 
        return (
            <div className="office-hours">
                <h3>Office Hours</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Monday</td>
                            <td>8:00 am to 5:00 pm</td>
                        </tr>
                        <tr>
                            <td>Tuesday</td>
                            <td>9:00 am to 6:00 pm</td>
                        </tr>
                        <tr>
                            <td>Wednesday</td>
                            <td>7:00 am to 4:00 pm</td>
                        </tr>
                        <tr>
                            <td>Thursday</td>
                            <td>8:00 am to 7:00 pm</td>
                        </tr>
                        <tr>
                            <td>Friday</td>
                            <td>8:00 am to 5:00 pm</td>
                        </tr>
                        <tr>
                            <td>Saturday</td>
                            <td>9:00 am to 1:30 pm</td>
                        </tr>
                    </tbody>
                </table>
            </div>
          );
    }
}
 
export default Map;