import Cidade from "./Cidade";

export default interface ModalAdicionarCidadeProps{
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    novaCidade: Cidade;
    setNovaCidade: (cidade: Cidade) => void;
    handleAdicionarCidade: () => void;
}