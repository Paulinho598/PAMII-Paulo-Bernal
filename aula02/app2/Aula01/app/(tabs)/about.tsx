import { Text, View, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
    <h1>Ácido nítrico</h1>
    <h2>Propriedades físicas</h2>
    <h3>O ácido nítrico puro é um líquido viscoso, incolor e inodoro. <br />
    Frequentemente, distintas impurezas o colorem de amarelo-acastanhado, quando puro se torna cristalino. <br />
    A temperatura ambiente libera fumaças (fumos) vermelhos ou amareladas. <br />
    O ácido nítrico concentrado tinge a pele humana de amarelo ao contato, devido a uma reação com a cisteína presente na queratina da pele.</h3>
    <h2>No anime Dr. Stone <br />
     o ácido nítrico (HNO3) é encontrado na Caverna dos Milagres, que é a única fonte conhecida do composto. 
    </h2>
    <h3>Como é obtido o ácido nítrico?</h3>
    <h4>O guano de morcego, rico em nitrogênio, pode ser usado para obter ácido nítrico. <br />
    A amônia pode ser oxidada com ar na presença de um catalisador, como a platina, para obter ácido nítrico. <br />
    Os óxidos de nitrogênio podem ser hidratados em torres de absorção para obter ácido nítrico. </h4>
    <h3>Usos do ácido nítrico </h3>
    <h4>O ácido nítrico e o etanol são utilizados em metalografia para visualizar a microestrutura de materiais. <br />
    O ácido nítrico é usado como decapante. <br />
    <h5>(Os decapantes são formulações químicas especialmente desenvolvidas para remover impurezas das superfícies metálicas. <br />
     Sua ação é fundamental para assegurar que as peças estejam completamente limpas e livres de contaminações antes da aplicação do revestimento de fosfato.)</h5></h4>
    <h3>Na série Dr. Stone </h3>
    <h4>O fluído despetrificador completo é um composto de ácido nítrico e álcool criado pela filtragem do "fluído milagroso" da caverna <br />
     e misturado com álcool destilado o mais próximo possível de 96%. <br />
     A proporção é de ácido nítrico 30% e álcool 70%, a reação não ocorrerá a menos que seja perfeita.
     <h5>Álcool</h5>
     Etanol também chamado de álcool etílico, simplesmente álcool, é uma substância orgânica obtida da fermentação de açúcares ou hidratação do etileno, <br />
      no anime Senku consegue álcool através da destilação do vinho de uva.
   
</h4>

      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#fff',
  },
});
