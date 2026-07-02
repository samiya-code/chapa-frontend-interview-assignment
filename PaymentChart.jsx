import React from 'react';
import '../styles/PaymentChart.css';
export default function PaymentChart({ data }) {
    const total = data.reduce((sum, item) => sum + item.value, 0);
    let currentAngle = -90;
    const slices = data.map((item) => {
        const sliceAngle = (item.value / total) * 360;
        const startAngle = currentAngle;
        const endAngle = currentAngle + sliceAngle;
        currentAngle = endAngle;
        const startRad = (startAngle * Math.PI) / 180;
        const endRad = (endAngle * Math.PI) / 180;
        const x1 = 50 + 40 * Math.cos(startRad);
        const y1 = 50 + 40 * Math.sin(startRad);
        const x2 = 50 + 40 * Math.cos(endRad);
        const y2 = 50 + 40 * Math.sin(endRad);
        const largeArc = sliceAngle > 180 ? 1 : 0;
        const pathData = [
            `M 50 50`,
            `L ${x1} ${y1}`,
            `A 40 40 0 ${largeArc} 1 ${x2} ${y2}`,
            'Z',
        ].join(' ');
        return {
            ...item,
            path: pathData,
            percentage: ((item.value / total) * 100).toFixed(1),
        };
    });
    return (<div className="payment-chart">
      <div className="chart-svg-container">
        <svg viewBox="0 0 100 100" className="donut-chart">
          {slices.map((slice, index) => (<path key={index} d={slice.path} fill={slice.color} opacity="0.8"/>))}
        </svg>
      </div>

      <div className="chart-legend">
        {data.map((item, index) => (<div key={index} className="legend-item">
            <div className="legend-color" style={{ backgroundColor: item.color }}></div>
            <span className="legend-label">{item.name}</span>
            <span className="legend-value">
              {slices[index]?.percentage}%
            </span>
          </div>))}
      </div>
    </div>);
}
