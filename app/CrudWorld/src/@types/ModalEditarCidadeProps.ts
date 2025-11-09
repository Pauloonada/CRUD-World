import Cidade from "./Cidade";

export default interface ModalEditarCidadeProps{
    modalVisible: boolean;
    setModalVisible: (visible: boolean) => void;
    cidadeEditada: Cidade;
    setCidadeEditada: (cidade: Cidade) => void;
    handleEditarCidade: () => void;
}