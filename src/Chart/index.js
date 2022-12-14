import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,  ResponsiveContainer } from 'recharts';

const data = [
  {
    name: '01',
    a: 55,
    b: 40,
    c:120,
    amt: 2400,
  },
  {
    name: '02',
    a: 40,
    b: 160,
    c:100,
    amt: 2210,
  },
  {
    name: '03',
    a: 80,
    b: 100,
    c:40,
    amt: 2290,
  },
  {
    name: '04',
    a: 80,
    b: 100,
    c:100,
    amt: 2000,
  },
  {
    name: '05',
    a: 20,
    b: 140,
    c:80,
    amt: 2181,
  },
  {
    name: '06',
    a: 10,
    b: 30,
    c:140,
    amt: 2500,
  },
  {
    name: '07',
    a: 40,
    b: 20,
    c:5,
    amt: 2100,
  },
  {
    name: '08',
    a: 180,
    b: 190,
    c:40,
    amt: 2100,
  },
  {
    name: '09',
    a: 100,
    b: 120,
    c:190,
    amt: 2100,
  }
];

export default class Charts extends PureComponent {
  static demoUrl = 'https://codesandbox.io/s/simple-line-chart-kec3v';

  render() {
    return (
       

<ResponsiveContainer  width="100%" height="50%"  >
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          
          
        >
          <CartesianGrid strokeDasharray="3 3" fill="white" />
          <XAxis dataKey="name" />
          <YAxis  />
          <Tooltip />
          
          <Line type="monotone" dataKey="b" stroke="blue" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="a" stroke="green" />
          <Line type="monotone" dataKey="c" stroke="red" />
        </LineChart>
      </ResponsiveContainer>
       
    );
  }
}