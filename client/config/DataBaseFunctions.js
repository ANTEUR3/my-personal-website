import supabase from '@/config/SupaBaseClient';

export async function getProjectSkills(ProjectId){
    
    const {data,error}=await supabase
    .from('ProjectSkills')
    .select('*,Skills(*)')
    .eq('Project',ProjectId)

    if(error){
        console.log(error)
    }
     console.log(data)
      return data;


}