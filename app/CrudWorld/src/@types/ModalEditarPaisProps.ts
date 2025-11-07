import Pais from "./Pais";

export default interface ModalAdicionarPaisProps{
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    paisEditado: Pais;
    setPaisEditado: (pais: Pais) => void;
    handleEditarPais: () => void;
}