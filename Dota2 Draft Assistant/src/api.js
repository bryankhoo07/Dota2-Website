import axios from 'axios'

export const analyzeDraft = async (radiantPicks, direPicks, currentTeam) => {
    try {
      const response = await axios.post(`${API_URL}/analyze-draft`, {
        radiant_picks: radiantPicks,
        dire_picks: direPicks,
        current_team: currentTeam
      });
      return response.data;
    } catch (error) {
      console.error('Error analyzing draft:', error);
      throw error;
    }
  };
  
  export const suggestHeroes = async (radiantPicks, direPicks, teamToPick) => {
    try {
      const response = await axios.post(`${API_URL}/suggest-heroes`, {
        radiant_picks: radiantPicks,
        dire_picks: direPicks,
        team_to_pick: teamToPick
      });
      return response.data;
    } catch (error) {
      console.error('Error suggesting heroes:', error);
      throw error;
    }
  };