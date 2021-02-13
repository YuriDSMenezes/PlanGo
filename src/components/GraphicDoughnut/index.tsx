import React, { FC, useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import api from '../../services/api';
import { graphicColors } from '../../styles/colorsGraphics';

interface LabelCategoryProps {
  categoria: string;
}
interface LabelTotalCategory {
  total: number;
}

const GraphicDoughnutComponent: FC = () => {
  const [labelsCategorys, setLabelsCategorys] = useState<
    LabelCategoryProps[]
  >();
  const [labelsValue, setLabelsValue] = useState<LabelTotalCategory[]>();

  useEffect(() => {
    async function getCategoriesNames() {
      try {
        const response = await api.get(
          'operacoes-financeiras/resumos-despesas/02/2021'
        );
        setLabelsCategorys(
          response.data.map(
            (labelCategory: LabelCategoryProps) => labelCategory.categoria
          )
        );
        setLabelsValue(
          response.data.map(
            (labelValue: LabelTotalCategory) => labelValue.total
          )
        );
      } catch (err) {
        if (process.env.NODE_ENV === 'development') {
          console.log(err);
        }
      }
    }
    getCategoriesNames();
  }, []);

  const data = {
    datasets: [
      {
        data: labelsValue,
        borderColor: graphicColors.borderColor,
        backgroundColor: graphicColors.backgroundColor,
        pointBackgroundColor: graphicColors.pointBackgroundColor,
        pointBorderColor: graphicColors.pointBorderColor
      }
    ],
    labels: labelsCategorys
  };

  return (
    <Doughnut
      data={data}
      height={80}
      options={{
        responsive: false,
        legend: { display: true, position: 'right' }
      }}
    />
  );
};

export default GraphicDoughnutComponent;
