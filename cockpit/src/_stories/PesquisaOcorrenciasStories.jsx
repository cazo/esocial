import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import PesquisaOcorrencias from "../app/components/dashboard/pesquisa/PesquisaOcorrencias";

function gerarVariasOcorrencias() {}

export default function pesquisaOcorrenciasStories() {
  storiesOf("PesquisaOcorrencias", module)
    .add("sem ocorrências sem filtros", () => (
      <PesquisaOcorrencias ocorrencias={[]} />
    ))
    .add("com várias ocorrências e sem filtros", () => (
      <PesquisaOcorrencias ocorrencias={gerarVariasOcorrencias()} />
    ));
}
