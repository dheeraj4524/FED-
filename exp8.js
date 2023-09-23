import React, { Component } from "react";
class ArrayObject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countriesinfo: [
        {
          name: "India",
          capital: "NewDelhi"
        },
        { name: "China", capital: "Beijing" },
        { name: "USA", capital: "WashingtonDC" },
        { name: "Japan", capital: "Tokyo" }
      ]
    };
  }
  render() {
    const { countriesinfo } = this.state;
    return (
      <div>
        <table border="1">
          <tr>
            <th>Country Name</th>
            <th>Country Capital</th>
          </tr>
          {countriesinfo.length > 0 &&
            countriesinfo.map((country) => {
              return (
                <tr key={country.name}>
                  <td>{country.name}</td>
                  <td>{country.capital}</td>
                </tr>
              );
            })}
        </table>
      </div>
    );
  }
}
export default ArrayObject;