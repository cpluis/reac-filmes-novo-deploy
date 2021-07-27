import { api_pos_cadastro } from "../../config";

async function PostCadastra(cadastro) {
  try {
    const response = await api_pos_cadastro.pos(
        {
            method: 'POST',            
            data: cadastro
        }
        )
        
    return response.data.Search;
  } catch (err) {
    alert(err);
  }
}

export default PostCadastra;