const satellites = [
  [296, 58, 20, 'pink'], [371, 104, 10, 'pink'], [480, 127, 31, 'silver'],
  [628, 194, 36, 'pink'], [521, 329, 24, 'pink'], [536, 430, 16, 'pink'],
  [372, 461, 36, 'silver'], [237, 405, 18, 'pink'], [91, 380, 50, 'silver'],
  [119, 204, 19, 'pink'], [203, 174, 15, 'pink'], [679, 324, 34, 'silver'],
] as const;

export function OrbitalArt() {
  return <div className="orbital-art" role="img" aria-label="The Impact Effect: przestrzenna magentowa kula otoczona delikatnymi orbitami i mniejszymi sferami">
    <svg viewBox="0 0 720 510" fill="none" aria-hidden="true">
      <defs>
        <radialGradient id="pink" cx="76%" cy="18%" r="90%"><stop stopColor="#ff9bd3"/><stop offset=".24" stopColor="#ff319c"/><stop offset=".48" stopColor="#e80070"/><stop offset=".76" stopColor="#a50048"/><stop offset=".92" stopColor="#be0050"/><stop offset="1" stopColor="#ff78b5"/></radialGradient>
        <radialGradient id="core" cx="28%" cy="66%" r="78%"><stop stopColor="#b62d73"/><stop offset=".43" stopColor="#d34b8b"/><stop offset=".7" stopColor="#ec79b1"/><stop offset=".88" stopColor="#f6add2"/><stop offset="1" stopColor="#ffe2f2"/></radialGradient>
        <radialGradient id="shine"><stop stopColor="#ffb1df" stopOpacity=".9"/><stop offset="1" stopColor="#ff8bd0" stopOpacity="0"/></radialGradient>
        <radialGradient id="silver" cx="70%" cy="16%" r="92%"><stop stopColor="#ffffff"/><stop offset=".35" stopColor="#efedf3"/><stop offset=".7" stopColor="#c8c5d0"/><stop offset="1" stopColor="#f4f2f8"/></radialGradient>
        <radialGradient id="halo"><stop stopColor="#ed80bb" stopOpacity=".09"/><stop offset="1" stopColor="#ed80bb" stopOpacity="0"/></radialGradient>
        <filter id="blur" x="-100%" y="-100%" width="300%" height="300%"><feGaussianBlur stdDeviation="15"/></filter>
        <filter id="soft"><feGaussianBlur stdDeviation="5"/></filter>
        <filter id="soft-back"><feGaussianBlur stdDeviation="2.5"/></filter>
      </defs>
      <circle cx="355" cy="274" r="230" fill="url(#halo)"/>
      <g fill="#eeecfc" opacity=".45" filter="url(#soft-back)"><circle cx="84" cy="130" r="66"/><circle cx="146" cy="103" r="56"/><circle cx="616" cy="425" r="45"/></g>
      <circle cx="28" cy="274" r="35" fill="#ff88cb" opacity=".2" filter="url(#blur)"/>
      <g stroke="#f664ae" strokeWidth=".7">
        <ellipse cx="360" cy="263" rx="279" ry="181" transform="rotate(-28 360 263)" opacity=".35"/>
        <ellipse cx="360" cy="263" rx="267" ry="167" transform="rotate(36 360 263)" opacity=".28"/>
        <ellipse cx="360" cy="263" rx="243" ry="128" transform="rotate(-55 360 263)" opacity=".24"/>
        <ellipse cx="360" cy="263" rx="277" ry="72" transform="rotate(-98 360 263)" opacity=".22"/>
        <ellipse cx="360" cy="263" rx="199" ry="195" transform="rotate(18 360 263)" opacity=".3" strokeDasharray="3 8"/>
        <ellipse cx="360" cy="263" rx="262" ry="126" transform="rotate(-11 360 263)" opacity=".24"/>
      </g>
      <ellipse cx="347" cy="263" rx="128" ry="106" transform="rotate(-28 347 263)" fill="#ee91c4" opacity=".055"/>
      <ellipse cx="367" cy="265" rx="107" ry="121" transform="rotate(-25 367 265)" fill="#ee91c4" opacity=".04"/>
      <circle className="central-sphere" cx="355" cy="266" r="66" fill="url(#core)"/>
      <ellipse cx="386" cy="234" rx="25" ry="31" transform="rotate(-33 386 234)" fill="url(#shine)" filter="url(#soft)" opacity=".65"/>
      <path d="M153 160 C200 117 221 245 213 327 C211 406 375 425 512 345" stroke="#f30b88" strokeWidth="1" opacity=".65" strokeDasharray="3 4"/>
      <g fill="#f71591"><circle cx="139" cy="163" r="5"/><circle cx="166" cy="390" r="4"/><circle cx="543" cy="155" r="3"/><circle cx="552" cy="166" r="2"/><circle cx="545" cy="97" r="2"/></g>
      {satellites.map(([cx,cy,r,fill], i) => <circle key={i} cx={cx} cy={cy} r={fill === 'pink' ? r * .85 : r} fill={`url(#${fill})`} opacity={i === 5 || i === 11 ? .4 : fill === 'pink' ? .75 : .85}/>)}
    </svg>
  </div>;
}
