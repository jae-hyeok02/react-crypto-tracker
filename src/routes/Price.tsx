import { useQuery } from "@tanstack/react-query";
import { fetchCoinHistory, fetchCoinTickers } from "../api";
import ApexChart from "react-apexcharts";
import styled from "styled-components";

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

interface PriceProps {
  coinId: string;
}

const Table = styled.table`
  width: 100%;
  margin: 20px 0;
  border: 1px solid black;
  border-collapse: collapse;
  font-size: 13px;

  th,
  td {
    border: 1px solid black;
    padding: 10px;
    text-align: center;
  }
`;

function Price({ coinId }: PriceProps) {
  const { isLoading, data } = useQuery<PriceData>({
    queryKey: ["tickers", coinId],
    queryFn: () => fetchCoinTickers(coinId),
  });
  return (
    <div>
      {isLoading ? (
        "Loading Price..."
      ) : (
        <Table>
          <tr>
            <th>1시간 전 대비</th>
            <th>6시간 전 대비</th>
            <th>12시간 전 대비</th>
            <th>24시간 전 대비</th>
          </tr>

          <tr>
            <td>{data?.quotes?.USD?.percent_change_1h?.toFixed(1)}%</td>
            <td>{data?.quotes?.USD?.percent_change_6h?.toFixed(1)}%</td>
            <td>{data?.quotes?.USD?.percent_change_12h?.toFixed(1)}%</td>
            <td>{data?.quotes?.USD?.percent_change_24h?.toFixed(1)}%</td>
          </tr>
        </Table>
      )}
    </div>
  );
}

export default Price;
