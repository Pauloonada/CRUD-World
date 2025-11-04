import Pais from "./Pais";

export default interface ModalAdicionarPaisProps{
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    novoPais: Pais;
    setNovoPais: (pais: Pais) => void;
    handleAdicionarPais: () => void;
}