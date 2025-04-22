# react-monitor-internet

[![Version Badge][npm-version-svg]][package-url]
[![GZipped size][npm-minzip-svg]][bundlephobia-url]
[![License][license-image]][license-url]

Monitor your internet connection in real-time with this React hook, which constantly checks behind the scene to determine whether the internet connection is online or offline.

## Features

- 🪝 **Hooks** - With `useMonitorInternet` it's easier to  monitor real time internet connection on browser

- 🛠 **Written in TypeScript** - It will support right into your existing TypeScript

- 💥 **Tiny bundle** - Under **2kB**

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