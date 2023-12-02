import Result from '../dto/Result.js';
import DiagnoService from '../service/DiagnoService.js';

export default class DiagnoController {
  constructor() {
    this._diagnoService = new DiagnoService();
    this.makeDiagno = this.makeDiagno.bind(this);
  }

  makeDiagno = async (req, res) => {
    try {
      const { id } = req.user;
      const { userComplaints, closestPainArea } = req.body;

      const result = await this._diagnoService.makeDiagno(id, userComplaints, closestPainArea);
      res.status(200).json(result);
    } catch (error) {
      res.status(500).json(Result.fail(error.message, null));
    }
  };
}
