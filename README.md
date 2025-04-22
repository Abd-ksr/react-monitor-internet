# react-monitor-internet

Monitor your internet connection in real-time with this React hook, which constantly checks behind the scene to determine whether the network is online or offline.

## Installation

Install the package with your package manager of choice:

```sh

npm install react-monitor-internet --save

```

## Usage

```jsx

import React from "react";

import { useMonitorInternet } from 'react-monitor-internet';


const Component = () => {

  const  { isOnline } = useMonitorInternet();

  return (

    <div>

      <h2>{`Internet Status ${isOnline}.`}</h2>

    </div>

  );

};

```