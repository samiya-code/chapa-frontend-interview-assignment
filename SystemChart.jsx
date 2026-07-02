import React from 'react';
import '../styles/SystemChart.css';
export default function SystemChart({ data }) {
    const maxValue = Math.max(...data.map((d) => d.value));
    const minValue = Math.min(...data.map((d) => d.value));
    const range = maxValue - minValue || 1;
    const points = data
        .map((point, index) => {
        const x = (index / (data.length - 1)) * 100;
        const y = 100 - ((point.value - minValue) / range) * 80 - 10;
        return { x, y, ...point };
    });
    const pathD = points.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
    return (<div className="system-chart">
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="line-chart">
        {/* Grid lines */}
        {[0, 25, 50, 75, 100].map((y) => (<line key={`h-${y}`} x1="0" y1={y} x2="100" y2={y} stroke="#e2e8f0" strokeWidth="0.3"/>))}

        {/* Chart line */}
        <polyline points={points.map((p) => `${p.x},${p.y}`).join(' ')} fill="none" stroke="#6d28d9" strokeWidth="1.5" vectorEffect="non-scaling-stroke"/>

        {/* Fill area under line */}
        <polygon points={`0,100 ${points.map((p) => `${p.x},${p.y}`).join(' ')} 100,100`} fill="url(#gradient)" opacity="0.3"/>

        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6d28d9" stopOpacity="0.6"/>
            <stop offset="100%" stopColor="#6d28d9" stopOpacity="0"/>
          </linearGradient>
        </defs>

        {/* Data points */}
        {points.map((point, index) => (<circle key={index} cx={point.x} cy={point.y} r="1.5" fill="#6d28d9" vectorEffect="non-scaling-stroke"/>))}
      </svg>

      <div className="chart-labels">
        {points.map((point, index) => (<div key={index} className="label" style={{
                left: `calc(${point.x}% - 20px)`,
            }}>
            <span>{point.date}</span>
            <span className="value">{point.value}K</span>
          </div>))}
      </div>
    </div>);
}
