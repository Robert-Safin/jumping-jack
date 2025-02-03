import useLocalization from "@/lib/useLocalization";

const TNC = () => {
  const { lan } = useLocalization();
  return (
    <div className="relative z-10 bg-theme-brown-1 text-white">
      <div className="z-20 max-w-[1440px] px-8 py-[100px] laptop:px-16">
        <h1 className="mb-6 text-3xl font-bold">
          {lan === "eng"
            ? "Jumping Jack Challenge - Terms and Conditions"
            : "Desafio Jumping Jack - Termos e Condições"}
        </h1>

        {/* Competition Rules */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            {lan === "eng" ? "1. Competition Rules" : "1. Regras da Competição"}
          </h2>
          <p className="mb-4">
            {lan === "eng"
              ? "The Jumping Jack Challenge is a skill-based competition where participants compete to achieve the highest score within the designated timeframe."
              : "O Desafio Jumping Jack é uma competição baseada em habilidade, onde os participantes competem para alcançar a maior pontuação dentro do período determinado."}
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              {lan === "eng"
                ? "Duration: The competition will run for a period of 20 days from the official start date."
                : "Duração: A competição terá duração de 20 dias a partir da data oficial de início."}
            </li>
            <li>
              {lan === "eng"
                ? "Entry Limit: Each participant is permitted a single entry per Steam account."
                : "Limite de Participação: Cada participante pode inscrever-se apenas uma vez por conta Steam."}
            </li>
            <li>
              {lan === "eng"
                ? "Game Integrity: Only unmodified game clients are allowed for participation."
                : "Integridade do Jogo: Apenas clientes de jogo não modificados são permitidos na competição."}
            </li>
            <li>
              {lan === "eng"
                ? "Score Validity: All scores must be achieved within the official competition period to be considered valid."
                : "Validade da Pontuação: Todas as pontuações devem ser obtidas dentro do período oficial da competição para serem consideradas válidas."}
            </li>
            <li>
              {lan === "eng"
                ? "Fair Play Enforcement: Anti-cheat measures will be strictly implemented to ensure a fair competition environment."
                : "Regras de Jogo Justo: Medidas anti-trapaça serão rigorosamente implementadas para garantir um ambiente de competição justo."}
            </li>
          </ul>
        </div>

        {/* Eligibility */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            {lan === "eng" ? "2. Eligibility" : "2. Elegibilidade"}
          </h2>
          <p className="mb-4">
            {lan === "eng"
              ? "To be eligible to participate in the competition, entrants must meet the following criteria:"
              : "Para ser elegível a participar da competição, os participantes devem atender aos seguintes critérios:"}
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              {lan === "eng"
                ? "Must be 18 years of age or older."
                : "Deve ter 18 anos de idade ou mais."}
            </li>
            <li>
              {lan === "eng"
                ? "Must possess a valid Steam account."
                : "Deve possuir uma conta Steam válida."}
            </li>
            <li>
              {lan === "eng"
                ? "Must not be an employee of the competition organizers or an immediate family member of an employee."
                : "Não pode ser um funcionário dos organizadores da competição ou um parente próximo de um funcionário."}
            </li>
            <li>
              {lan === "eng"
                ? "Must be a legal resident of an eligible country (participation is void where prohibited by law)."
                : "Deve ser residente legal de um país elegível (a participação é inválida onde for proibida por lei)."}
            </li>
          </ul>
        </div>

        {/* Prize Details */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            {lan === "eng" ? "3. Prize Details" : "3. Detalhes do Prêmio"}
          </h2>
          <p className="mb-4">
            {lan === "eng"
              ? "The competition offers a cash prize of $100, subject to the following conditions:"
              : "A competição oferece um prêmio em dinheiro de $100, sujeito às seguintes condições:"}
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              {lan === "eng"
                ? "The winner will be determined based on the highest verified score."
                : "O vencedor será determinado com base na maior pontuação verificada."}
            </li>
            <li>
              {lan === "eng"
                ? "The prize will be awarded via PayPal or bank transfer within 30 days of winner verification."
                : "O prêmio será concedido via PayPal ou transferência bancária dentro de 30 dias após a verificação do vencedor."}
            </li>
            <li>
              {lan === "eng"
                ? "The winner shall bear sole responsibility for any applicable taxes related to the prize."
                : "O vencedor será o único responsável por quaisquer impostos aplicáveis ao prêmio."}
            </li>
            <li>
              {lan === "eng"
                ? "In the event of a tie, the participant with the earliest valid submission will be declared the winner."
                : "Em caso de empate, o participante com a submissão válida mais antiga será declarado vencedor."}
            </li>
          </ul>
        </div>

        {/* Disqualification */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            {lan === "eng" ? "4. Disqualification" : "4. Desqualificação"}
          </h2>
          <p className="mb-4">
            {lan === "eng"
              ? "Participants may face disqualification under the following circumstances:"
              : "Os participantes podem ser desqualificados nas seguintes circunstâncias:"}
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              {lan === "eng"
                ? "Use of cheats, hacks, or automated gameplay methods."
                : "Uso de trapaças, hacks ou métodos de jogo automatizados."}
            </li>
            <li>
              {lan === "eng"
                ? "Submission of multiple entries using different accounts."
                : "Envio de múltiplas inscrições usando contas diferentes."}
            </li>
            <li>
              {lan === "eng"
                ? "Falsification of personal or competition-related information."
                : "Falsificação de informações pessoais ou relacionadas à competição."}
            </li>
            <li>
              {lan === "eng"
                ? "Violation of Steam’s Terms of Service."
                : "Violação dos Termos de Serviço da Steam."}
            </li>
          </ul>
        </div>

        {/* Privacy and Data Usage */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            {lan === "eng"
              ? "5. Privacy and Data Usage"
              : "5. Privacidade e Uso de Dados"}
          </h2>
          <p className="mb-4">
            {lan === "eng"
              ? "By entering the competition, participants acknowledge and agree to the following:"
              : "Ao participar da competição, os participantes reconhecem e concordam com o seguinte:"}
          </p>
          <ul className="list-inside list-disc space-y-2">
            <li>
              {lan === "eng"
                ? "Their Steam profile and gameplay data may be collected for competition purposes."
                : "Seu perfil na Steam e dados de jogo podem ser coletados para fins da competição."}
            </li>
            <li>
              {lan === "eng"
                ? "Their username may be displayed on public leaderboards."
                : "Seu nome de usuário pode ser exibido em rankings públicos."}
            </li>
            <li>
              {lan === "eng"
                ? "Winners may be publicly announced in competition-related communications."
                : "Os vencedores podem ser anunciados publicamente em comunicações relacionadas à competição."}
            </li>
            <li>
              {lan === "eng"
                ? "Organizers may contact participants regarding prize distribution and related matters."
                : "Os organizadores podem entrar em contato com os participantes sobre a distribuição do prêmio e assuntos relacionados."}
            </li>
          </ul>
        </div>

        {/* General Provisions */}
        <div className="mb-8">
          <h2 className="mb-4 text-2xl font-semibold">
            {lan === "eng" ? "General Provisions" : "Disposições Gerais"}
          </h2>
          <p className="mb-4">
            {lan === "eng"
              ? "These terms and conditions are subject to change at the discretion of the competition organizers."
              : "Estes termos e condições estão sujeitos a alterações a critério dos organizadores da competição."}
          </p>
          <p className="mb-4">
            <span className="font-bold">
              {lan === "eng" ? "Last updated:" : "Última atualização:"}
            </span>{" "}
            January 22, 2025.
          </p>
          <p>
            {lan === "eng"
              ? "For any inquiries, please contact"
              : "Para dúvidas, entre em contato com"}{" "}
            <a
              href="mailto:support@jumpingjackchallenge.com"
              className="text-theme-blue underline"
            >
              support@jumpingjackchallenge.com
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default TNC;
