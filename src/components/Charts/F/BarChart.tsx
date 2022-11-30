import cn from "classnames";
import { FC } from "react";
import style from "./BarChart.module.css";

export const BarChart: FC = () => {
  const tickLeft = "1.8113207547169812%";
  const range = [
    {
      distance: 0,
      bottom: 12,
    },
    {
      distance: 27,
      bottom: 32,
    },
    {
      distance: 54,
      bottom: 51,
    },
    {
      distance: 81,
      bottom: 71,
    },
    {
      distance: 108,
      bottom: 90,
    },
    {
      distance: 135,
      bottom: 110,
    },
  ];
  return (
    <div
      className={style.graph}
      style={{
        height: "130px",
      }}
    >
      <ul className={style["y-axis"]}>
        {range.map((li) => (
          <li
            className={style.label}
            style={{
              bottom: `${li.bottom}px`,
            }}
          >
            {li.distance === 0 ? `${li.distance}km` : li.distance}
          </li>
        ))}
      </ul>
      <ul
        className={style.intervals}
        style={{
          height: "113px",
        }}
      >
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202147"
          style={{
            left: "0.0%",
            width: `${tickLeft}`,
          }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202147">
              <div className={style.fill} style={{ height: "39px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202148"
          style={{
            left: `${tickLeft}`,
            width: `${tickLeft}`,
          }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202148">
              <div className={style.fill} style={{ height: "42px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202149"
          style={{
            left: "3.6226415094339623%",
            width: `${tickLeft}`,
          }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202149">
              <div className={style.fill} style={{ height: "34px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202150"
          style={{ left: "5.433962264150944%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="#">
              <div className={style.fill} style={{ height: "61px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202151"
          style={{ left: "7.245283018867925%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="#">
              <div className={style.fill} style={{ height: "54px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202152"
          style={{ left: "9.056603773584905%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202152">
              <div className={style.fill} style={{ height: "49px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202201"
          style={{
            left: "10.867924528301888%",
            width: `${tickLeft}`,
          }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202201">
              <div className={style.fill} style={{ height: "46px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202202"
          style={{
            left: "12.679245283018869%",
            width: `${tickLeft}`,
          }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202202">
              <div className={style.fill} style={{ height: "56px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202203"
          style={{ left: "14.49056603773585%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202203">
              <div className={style.fill} style={{ height: "60px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202204"
          style={{ left: "16.30188679245283%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202204">
              <div className={style.fill} style={{ height: "45px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202205"
          style={{ left: "18.11320754716981%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202205">
              <div className={style.fill} style={{ height: "51px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202206"
          style={{ left: "19.92452830188679%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202206">
              <div className={style.fill} style={{ height: "54px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202207"
          style={{
            left: "21.735849056603776%",
            width: `${tickLeft}`,
          }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202207">
              <div className={style.fill} style={{ height: "52px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202208"
          style={{
            left: "23.547169811320757%",
            width: `${tickLeft}`,
          }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202208">
              <div className={style.fill} style={{ height: "58px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202209"
          style={{
            left: "25.358490566037737%",
            width: `${tickLeft}`,
          }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202209">
              <div className={style.fill} style={{ height: "22px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202210"
          style={{
            left: "27.169811320754718%",
            width: `${tickLeft}`,
          }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202210">
              <div className={style.fill} style={{ height: "39px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202211"
          style={{ left: "28.9811320754717%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202211">
              <div className={style.fill} style={{ height: "40px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202212"
          style={{ left: "30.79245283018868%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202212">
              <div className={style.fill} style={{ height: "47px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202213"
          style={{ left: "32.60377358490566%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202213">
              <div className={style.fill} style={{ height: "57px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202214"
          style={{ left: "34.41509433962264%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202214">
              <div className={style.fill} style={{ height: "59px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202215"
          style={{ left: "36.22641509433962%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202215">
              <div className={style.fill} style={{ height: "56px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202216"
          style={{ left: "38.0377358490566%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202216">
              <div className={style.fill} style={{ height: "52px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202217"
          style={{ left: "39.84905660377358%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202217">
              <div className={style.fill} style={{ height: "43px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202218"
          style={{
            left: "41.660377358490564%",
            width: `${tickLeft}`,
          }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202218">
              <div className={style.fill} style={{ height: "58px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202219"
          style={{ left: "43.47169811320755%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202219">
              <div className={style.fill} style={{ height: "42px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202220"
          style={{ left: "45.28301886792453%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202220">
              <div className={style.fill} style={{ height: "51px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202221"
          style={{ left: "47.09433962264151%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202221">
              <div className={style.fill} style={{ height: "58px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202222"
          style={{
            left: "48.905660377358494%",
            width: `${tickLeft}`,
          }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202222">
              <div className={style.fill} style={{ height: "55px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202223"
          style={{
            left: "50.716981132075475%",
            width: `${tickLeft}`,
          }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202223">
              <div className={style.fill} style={{ height: "47px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202224"
          style={{
            left: "52.528301886792455%",
            width: `${tickLeft}`,
          }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202224">
              <div className={style.fill} style={{ height: "39px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202225"
          style={{
            left: "54.339622641509436%",
            width: `${tickLeft}`,
          }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202225">
              <div className={style.fill} style={{ height: "60px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202226"
          style={{ left: "56.15094339622642%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202226">
              <div className={style.fill} style={{ height: "57px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202227"
          style={{ left: "57.9622641509434%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202227">
              <div className={style.fill} style={{ height: "42px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202228"
          style={{ left: "59.77358490566038%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202228">
              <div className={style.fill} style={{ height: "22px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202229"
          style={{ left: "61.58490566037736%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202229">
              <div className={style.fill} style={{ height: "2px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202230"
          style={{ left: "63.39622641509434%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202230">
              <div className={style.fill} style={{ height: "30px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202231"
          style={{ left: "65.20754716981132%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202231">
              <div className={style.fill} style={{ height: "48px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202232"
          style={{ left: "67.01886792452831%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202232">
              <div className={style.fill} style={{ height: "33px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202233"
          style={{ left: "68.83018867924528%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202233">
              <div className={style.fill} style={{ height: "23px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202234"
          style={{ left: "70.64150943396227%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202234">
              <div className={style.fill} style={{ height: "15px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202235"
          style={{ left: "72.45283018867924%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202235">
              <div className={style.fill} style={{ height: "2px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202236"
          style={{ left: "74.26415094339623%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202236">
              <div className={style.fill} style={{ height: "42px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202237"
          style={{ left: "76.0754716981132%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202237">
              <div className={style.fill} style={{ height: "39px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202238"
          style={{ left: "77.88679245283019%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202238">
              <div className={style.fill} style={{ height: "50px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202239"
          style={{ left: "79.69811320754717%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202239">
              <div className={style.fill} style={{ height: "57px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202240"
          style={{ left: "81.50943396226415%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202240">
              <div className={style.fill} style={{ height: "11px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202241"
          style={{ left: "83.32075471698113%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202241">
              <div className={style.fill} style={{ height: "45px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202242"
          style={{ left: "85.13207547169812%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202242">
              <div className={style.fill} style={{ height: "41px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202243"
          style={{ left: "86.9433962264151%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202243">
              <div className={style.fill} style={{ height: "64px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202244"
          style={{ left: "88.75471698113208%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202244">
              <div className={style.fill} style={{ height: "50px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202245"
          style={{ left: "90.56603773584906%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202245">
              <div className={style.fill} style={{ height: "51px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202246"
          style={{ left: "92.37735849056604%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202246">
              <div className={style.fill} style={{ height: "12px" }}></div>
            </a>
          </div>
        </li>
        <li
          className={cn(style.interval, style.selectable)}
          id="interval-202247"
          style={{ left: "94.18867924528303%", width: `${tickLeft}` }}
        >
          <div className={style.bar}>
            <a className={style.bar} href="202247">
              <div className={style.fill} style={{ height: "38px" }}></div>
            </a>
          </div>
        </li>
      </ul>
      <div className={style["x-axis"]}>
        <div className={style.tick} style={{ left: "0.0%" }}></div>
        <div className={style.tick} style={{ left: `${tickLeft}` }}></div>
        <div className={style.label} style={{ left: `${tickLeft}` }}>
          Dec
        </div>
        <div
          className={style.tick}
          style={{ left: "3.6226415094339623%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "5.433962264150944%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "7.245283018867925%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "9.056603773584905%" }}
        ></div>
        <div className={style.label} style={{ left: "9.056603773584905%" }}>
          Jan 2022
        </div>
        <div
          className={style.tick}
          style={{ left: "10.867924528301888%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "12.679245283018869%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "14.49056603773585%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "16.30188679245283%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "18.11320754716981%" }}
        ></div>
        <div className={style.label} style={{ left: "18.11320754716981%" }}>
          Feb
        </div>
        <div
          className={style.tick}
          style={{ left: "19.92452830188679%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "21.735849056603776%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "23.547169811320757%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "25.358490566037737%" }}
        ></div>
        <div className={style.label} style={{ left: "25.358490566037737%" }}>
          Mar
        </div>
        <div
          className={style.tick}
          style={{ left: "27.169811320754718%" }}
        ></div>
        <div className={style.tick} style={{ left: "28.9811320754717%" }}></div>
        <div
          className={style.tick}
          style={{ left: "30.79245283018868%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "32.60377358490566%" }}
        ></div>
        <div className={style.label} style={{ left: "32.60377358490566%" }}>
          Apr
        </div>
        <div
          className={style.tick}
          style={{ left: "34.41509433962264%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "36.22641509433962%" }}
        ></div>
        <div className={style.tick} style={{ left: "38.0377358490566%" }}></div>
        <div
          className={style.tick}
          style={{ left: "39.84905660377358%" }}
        ></div>
        <div className={style.label} style={{ left: "39.84905660377358%" }}>
          May
        </div>
        <div
          className={style.tick}
          style={{ left: "41.660377358490564%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "43.47169811320755%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "45.28301886792453%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "47.09433962264151%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "48.905660377358494%" }}
        ></div>
        <div className={style.label} style={{ left: "48.905660377358494%" }}>
          Jun
        </div>
        <div
          className={style.tick}
          style={{ left: "50.716981132075475%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "52.528301886792455%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "54.339622641509436%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "56.15094339622642%" }}
        ></div>
        <div className={style.label} style={{ left: "56.15094339622642%" }}>
          Jul
        </div>
        <div className={style.tick} style={{ left: "57.9622641509434%" }}></div>
        <div
          className={style.tick}
          style={{ left: "59.77358490566038%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "61.58490566037736%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "63.39622641509434%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "65.20754716981132%" }}
        ></div>
        <div className={style.label} style={{ left: "65.20754716981132%" }}>
          Aug
        </div>
        <div
          className={style.tick}
          style={{ left: "67.01886792452831%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "68.83018867924528%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "70.64150943396227%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "72.45283018867924%" }}
        ></div>
        <div className={style.label} style={{ left: "72.45283018867924%" }}>
          Sep
        </div>
        <div
          className={style.tick}
          style={{ left: "74.26415094339623%" }}
        ></div>
        <div className={style.tick} style={{ left: "76.0754716981132%" }}></div>
        <div
          className={style.tick}
          style={{ left: "77.88679245283019%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "79.69811320754717%" }}
        ></div>
        <div className={style.label} style={{ left: "79.69811320754717%" }}>
          Oct
        </div>
        <div
          className={style.tick}
          style={{ left: "81.50943396226415%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "83.32075471698113%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "85.13207547169812%" }}
        ></div>
        <div className={style.tick} style={{ left: "86.9433962264151%" }}></div>
        <div
          className={style.tick}
          style={{ left: "88.75471698113208%" }}
        ></div>
        <div className={style.label} style={{ left: "88.75471698113208%" }}>
          Nov
        </div>
        <div
          className={style.tick}
          style={{ left: "90.56603773584906%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "92.37735849056604%" }}
        ></div>
        <div
          className={style.tick}
          style={{ left: "94.18867924528303%" }}
        ></div>
      </div>
    </div>
  );
};
