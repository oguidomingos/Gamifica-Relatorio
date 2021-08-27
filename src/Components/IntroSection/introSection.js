import React from "react";
import { TextGrid, TitleGrid, DescGrid, TextMainGrid, TextCompGrid } from "./style";

function SectionIntro() {
  return (
    <TextGrid>
      <TitleGrid>
        <h1> Evento Teste dos Testes </h1>
      </TitleGrid>

      <DescGrid>
        <p> Lipsum Ipsum sit dolor </p>
      </DescGrid>

      <TextMainGrid>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          hendrerit ante tempus massa imperdiet, eget elementum dolor consequat.
          Donec tempor massa est, id hendrerit est porttitor nec. Etiam pulvinar
          et nibh eu pretium. Sed placerat nisl ex, vitae interdum nisi sagittis
          nec. Nunc ac neque vitae elit vestibulum bibendum et et eros.{" "}
        </p>
      </TextMainGrid>

      <TextCompGrid>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur
          hendrerit ante tempus massa imperdiet, eget elementum dolor consequat.
          Donec tempor massa est, id hendrerit est porttitor nec. Etiam pulvinar
          et nibh eu pretium. Sed placerat nisl ex, vitae interdum nisi sagittis
          nec. Nunc ac neque vitae elit vestibulum bibendum et et eros.{" "}
        </p>
      </TextCompGrid>
    </TextGrid>
  );
}

export default SectionIntro;
