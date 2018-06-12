import React from "react";
import { Link } from "react-router-dom";
import "../css/KunstwerkCTA.css";

const KunstwerkCTA = ({ kunstwerkId, color, classname }) => {
  return (
    <Link className={classname} to={`/werkdetail/${kunstwerkId}`}>
      <svg className="section-right-link-svg svg-rotater" viewBox="0 0 212.1 212.1">
        <g className="link-svg-text">
          <circle cx="106" cy="106.04" r="100" fill="#fff" />
          <text
            transform="matrix(-0.72, -0.7, 0.7, -0.72, 78.21, 154.99)"
            font-size="33.79"
            fill={color}
            font-family="ArchivoBlack-Regular, Archivo Black"
          >
            O
          </text>
          <text
            transform="translate(59.07 137.3) rotate(-108.68)"
            font-size="33.79"
            fill={color}
            font-family="ArchivoBlack-Regular, Archivo Black"
          >
            N
          </text>
          <text
            transform="matrix(0.1, -0.99, 0.99, 0.1, 50.56, 112.7)"
            font-size="33.79"
            fill={color}
            font-family="ArchivoBlack-Regular, Archivo Black"
          >
            T
          </text>
          <text
            transform="translate(52.22 90.31) rotate(-60.17)"
            font-size="33.79"
            fill={color}
            font-family="ArchivoBlack-Regular, Archivo Black"
          >
            D
          </text>
          <text
            transform="translate(64.07 69.15) rotate(-36.05)"
            font-size="33.79"
            fill={color}
            font-family="ArchivoBlack-Regular, Archivo Black"
          >
            E
          </text>
          <text
            transform="translate(81.71 55.29) rotate(-11.19)"
            font-size="33.79"
            fill={color}
            font-family="ArchivoBlack-Regular, Archivo Black"
          >
            K
          </text>
          <text
            transform="translate(107.67 51.26) rotate(7.64)"
            font-size="33.79"
            fill={color}
            font-family="ArchivoBlack-Regular, Archivo Black"
          />
          <text
            transform="translate(117.56 50.94) rotate(26.28)"
            font-size="33.79"
            fill={color}
            font-family="ArchivoBlack-Regular, Archivo Black"
          >
            H
          </text>
          <text
            transform="matrix(0.63, 0.78, -0.78, 0.63, 140.92, 62.41)"
            font-size="33.79"
            fill={color}
            font-family="ArchivoBlack-Regular, Archivo Black"
          >
            E
          </text>
          <text
            transform="translate(155.27 79.67) rotate(74.38)"
            font-size="33.79"
            fill={color}
            font-family="ArchivoBlack-Regular, Archivo Black"
          >
            T
          </text>
          <text
            transform="translate(160.68 101.73) rotate(91.38)"
            font-size="33.79"
            fill={color}
            font-family="ArchivoBlack-Regular, Archivo Black"
          />
          <text
            transform="translate(162.84 111.55) rotate(112.76)"
            font-size="33.79"
            fill={color}
            font-family="ArchivoBlack-Regular, Archivo Black"
          >
            W
          </text>
          <text
            transform="matrix(-0.77, 0.64, -0.64, -0.77, 150.21, 140.26)"
            font-size="33.79"
            fill={color}
            font-family="ArchivoBlack-Regular, Archivo Black"
          >
            E
          </text>
          <text
            transform="translate(133.3 155.03) rotate(164.4)"
            font-size="33.79"
            fill={color}
            font-family="ArchivoBlack-Regular, Archivo Black"
          >
            R
          </text>
          <text
            transform="translate(110.13 162.22) rotate(-169.65)"
            font-size="33.79"
            fill={color}
            font-family="ArchivoBlack-Regular, Archivo Black"
          >
            K
          </text>
        </g>
        <polygon
          points="90.58 86.2 118.58 86.11 119.64 86.11 125.89 86.11 125.89 92.28 125.89 93.34 125.97 121.35 128 121.35 127.92 84 90.58 84.09 90.58 86.2"
          fill={color}
        />
        <polygon
          points="115.26 92.37 112.42 92.37 90.58 92.37 90.58 94.48 110.31 94.39 84 120.86 85.46 122.32 113.23 94.39 115.26 92.37"
          fill={color}
        />
        <polygon
          points="119.64 96.67 117.61 98.78 89.85 126.62 91.31 128.09 117.61 101.7 117.61 121.43 119.72 121.43 119.64 99.59 119.64 96.67"
          fill={color}
        />
        <polygon
          points="119.64 93.75 119.64 92.37 118.18 92.37 116.15 94.39 86.92 123.78 88.39 125.24 117.61 95.86 119.64 93.75"
          fill={color}
        />
        <polygon
          points="123.78 92.53 123.78 90.25 123.78 88.14 121.75 88.14 119.4 88.14 116.56 88.14 90.58 88.23 90.58 90.34 114.44 90.25 117.37 90.25 120.29 90.25 121.75 90.25 121.75 91.72 121.75 94.64 121.75 97.48 121.83 121.43 123.86 121.43 123.78 95.45 123.78 92.53"
          fill={color}
        />
      </svg>
    </Link>
  );
};

export default KunstwerkCTA;
