import React, { useRef, useState } from "react";
import {
  Box,
  Container,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// pitures import
import icon1 from "../images/icon1.png";
import icon2 from "../images/icon2.png";
import icon3 from "../images/icon3.png";
import icon4 from "../images/icon4.png";

const sticky = {
  position: "sticky",
  left: 0,
  width: "150px",
  borderBottom: "1px solid #000",
};

const pinStick = {
  position: "sticky",
  borderBottom: "1px solid #000",
  left: "182px",
  width: "190px",
};

const secondPinStick = {
  position: "sticky",
  borderBottom: "1px solid #000",
  left: "404px",
  width: "190px",
};

const styleCell = {
  width: "190px",
  borderBottom: "1px solid #000",
};

const dataArray = [
  {
    name: "Anbieter",
    Testsieger: icon1,
    Bester: icon2,
    Preis: icon3,
    Testsieg: icon4,
    Bank: icon4,
  },
  {
    name: "Angebot erhalten",
    Testsieger: "Zum Anbieter",
    Bester: "Zum Anbieter",
    Preis: "Zum Anbieter",
    Testsieg: "Zum Anbieter",
    Bank: "Zum Anbieter",
  },
  {
    name: "Kontogebühren",
    Testsieger: "0 Euro",
    Bester: "0 Euro",
    Preis: "0 Euro",
    Testsieg: "0 Euro",
    Bank: "0 Euro",
  },
  {
    name: "Gesetzliche Einlagensicherung",
    Testsieger: "100.000 Euro",
    Bester: "100.000 Euro",
    Preis: "100.000 Euro",
    Testsieg: "100.000 Euro",
    Bank: "100.000 Euro",
  },
  {
    name: "Gesetzliche Einlagensicherung",
    Testsieger: "100.000 Euro",
    Bester: "100.000 Euro",
    Preis: "100.000 Euro",
    Testsieg: "100.000 Euro",
    Bank: "100.000 Euro",
  },
];

const headerArray = ["Testsieger", "Bester", "Preis", "Testsieg", "Bank"];

export default function StickyTable() {
  const [pinArray, setPinArray] = useState([]);
  const [nonPinArray, setNonPinArray] = useState([]);
  const containerRef = useRef(null);

  const scrollNext = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const scrollPrev = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const handlePinFunction = (removeText) => {
    if (pinArray.length === 0) {
      const filterPin = headerArray.filter((item) => item === removeText);
      const filterNonPin = headerArray.filter((item) => item !== removeText);
      setPinArray(filterPin);
      setNonPinArray(filterNonPin);
    } else if (pinArray.length === 2) {
      console.log("you can not pin more than two");
    } else {
      const filterPin = nonPinArray.filter((item) => item === removeText);
      const filterNonPin = nonPinArray.filter((item) => item !== removeText);
      pinArray.push(filterPin[0]);
      setNonPinArray(filterNonPin);
    }
  };

  return (
    <Container>
      <TableContainer
        style={{ maxWidth: 1000, margin: "auto" }}
        ref={containerRef}
      >
        <Table aria-label="simple table" style={{ tableLayout: "fixed" }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={sticky}
                style={{ backgroundColor: "#fff" }}
              ></TableCell>
              {pinArray.map((headText, index) => {
                return (
                  <TableCell
                    sx={index === 0 ? pinStick : secondPinStick}
                    style={{
                      borderRadius: "20px 20px 0 0",
                      backgroundColor:
                        headText === "Testsieger"
                          ? "#ff714c"
                          : headText === "Preis"
                          ? "#8a7ef6"
                          : "#f5f5f5",
                      color:
                        headText === "Testsieger"
                          ? "#fff"
                          : headText === "Preis"
                          ? "#fff"
                          : "#000",
                      paddingTop: "10px",
                      paddingBottom: "10px",
                    }}
                    key={headText + index}
                    align="center"
                  >
                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      alignItems="center"
                    >
                      <Typography>{headText}</Typography>
                      <Typography fontSize="12px">Pinned</Typography>
                    </Stack>
                  </TableCell>
                );
              })}

              {nonPinArray.length === 0
                ? headerArray.map((headText, index) => {
                    return (
                      <TableCell
                        sx={styleCell}
                        style={{
                          borderRadius: "20px 20px 0 0",
                          backgroundColor:
                            headText === "Testsieger"
                              ? "#ff714c"
                              : headText === "Preis"
                              ? "#8a7ef6"
                              : "#f5f5f5",
                          color:
                            headText === "Testsieger"
                              ? "#fff"
                              : headText === "Preis"
                              ? "#fff"
                              : "#000",
                          paddingTop: "10px",
                          paddingBottom: "10px",
                        }}
                        key={index}
                        align="center"
                      >
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Typography>{headText}</Typography>
                          <Box display="flex" alignItems="center" gap={0.5}>
                            <Typography fontSize="12px">Pin</Typography>
                            <BookmarkIcon
                              sx={{ fontSize: "12px", cursor: "pointer" }}
                              onClick={() => handlePinFunction(headText)}
                            />
                          </Box>
                        </Stack>
                      </TableCell>
                    );
                  })
                : nonPinArray.map((headText) => {
                    return (
                      <TableCell
                        sx={styleCell}
                        style={{
                          borderRadius: "20px 20px 0 0",
                          backgroundColor:
                            headText === "Testsieger"
                              ? "#ff714c"
                              : headText === "Preis"
                              ? "#8a7ef6"
                              : "#f5f5f5",
                          color:
                            headText === "Testsieger"
                              ? "#fff"
                              : headText === "Preis"
                              ? "#fff"
                              : "#000",
                          paddingTop: "10px",
                          paddingBottom: "10px",
                        }}
                        key={headText}
                        align="center"
                      >
                        <Stack
                          direction="row"
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <Typography>{headText}</Typography>
                          <Box display="flex" alignItems="center" gap={0.5}>
                            <Typography fontSize="12px">Pin</Typography>
                            <BookmarkIcon
                              sx={{ fontSize: "12px", cursor: "pointer" }}
                              onClick={() => handlePinFunction(headText)}
                            />
                          </Box>
                        </Stack>
                      </TableCell>
                    );
                  })}
            </TableRow>
          </TableHead>
          <TableBody>
            {dataArray.map((row) => (
              <TableRow key={row.name}>
                <TableCell
                  sx={sticky}
                  style={{ backgroundColor: "#fff", height: "80px" }}
                  component="th"
                  scope="row"
                >
                  {row.name}
                </TableCell>
                {pinArray.map((item, i) => (
                  <TableCell
                    align="center"
                    sx={i === 0 ? pinStick : secondPinStick}
                    style={{
                      backgroundColor:
                        item === "Testsieger"
                          ? "#ffd4c9"
                          : item === "Preis"
                          ? "#dcd8fc"
                          : "#fafafa",
                      color: "#000",
                      height: "80px",
                    }}
                    key={item + i}
                  >
                    {row[item] === icon1 ||
                    row[item] === icon2 ||
                    row[item] === icon3 ||
                    row[item] === icon4 ? (
                      <img src={row[item]} alt="" width="90px" />
                    ) : (
                      row[item]
                    )}
                  </TableCell>
                ))}

                {nonPinArray.length > 0 ? (
                  nonPinArray.map((item, index) => {
                    return (
                      <TableCell
                        key={index}
                        sx={styleCell}
                        style={{
                          backgroundColor:
                            item === "Testsieger"
                              ? "#ffd4c9"
                              : item === "Preis"
                              ? "#dcd8fc"
                              : "#fafafa",
                          color: "#000",
                          height: "80px",
                        }}
                        align="center"
                      >
                        {row[item] === icon1 ||
                        row[item] === icon2 ||
                        row[item] === icon3 ||
                        row[item] === icon4 ? (
                          <img src={row[item]} alt=" " width="90px" />
                        ) : (
                          row[item]
                        )}
                      </TableCell>
                    );
                  })
                ) : (
                  <>
                    <TableCell
                      align="center"
                      sx={styleCell}
                      style={{ backgroundColor: "#ffd4c9", height: "80px" }}
                    >
                      {row.Testsieger === icon1 ? (
                        <img src={row.Testsieger} alt=" " width="90px" />
                      ) : (
                        row.Testsieger
                      )}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={styleCell}
                      style={{ backgroundColor: "#fafafa", height: "80px" }}
                    >
                      {row.Bester === icon2 ? (
                        <img src={row.Bester} alt=" " width="90px" />
                      ) : (
                        row.Bester
                      )}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={styleCell}
                      style={{ backgroundColor: "#dcd8fc", height: "80px" }}
                    >
                      {row.Preis === icon3 ? (
                        <img src={row.Preis} alt=" " width="90px" />
                      ) : (
                        row.Preis
                      )}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={styleCell}
                      style={{ backgroundColor: "#fafafa", height: "80px" }}
                    >
                      {row.Testsieg === icon4 ? (
                        <img src={row.Testsieg} alt=" " width="90px" />
                      ) : (
                        row.Testsieg
                      )}
                    </TableCell>
                    <TableCell
                      align="center"
                      sx={styleCell}
                      style={{ backgroundColor: "#fafafa", height: "80px" }}
                    >
                      {row.Bank === icon4 ? (
                        <img src={row.Bank} alt=" " width="90px" />
                      ) : (
                        row.Bank
                      )}
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Stack
        mt={-42}
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <ArrowBackIosNewIcon
          onClick={scrollPrev}
          sx={{
            cursor: "pointer",
            background: "#f5f5f5",
            padding: "10px",
            borderRadius: "50%",
          }}
        />
        <ArrowForwardIosIcon
          onClick={scrollNext}
          sx={{
            cursor: "pointer",
            background: "#f5f5f5",
            padding: "10px",
            borderRadius: "50%",
          }}
        />
      </Stack>
    </Container>
  );
}
