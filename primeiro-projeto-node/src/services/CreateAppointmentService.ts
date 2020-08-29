import { startOfHour } from 'date-fns';
import Appointment from '../models/appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
/**
 * Recebimento das informacoes (date e provider)
 * Tratativas de erros/excessoes (aqui e em rotas -> throw)
 * Acesso ao repositorio
 */

interface RequestDTO {
  provider: string;
  date: Date;
}

class CreateAppointmentService {
  private appointmentsRepository: AppointmentsRepository;

  constructor(appointmentsRepository: AppointmentsRepository) {
    this.appointmentsRepository = appointmentsRepository;
  }

  public execute({ provider, date }: RequestDTO): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentinSameDate = this.appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentinSameDate) {
      throw Error('This appointment is booked');
    }

    const appointment = this.appointmentsRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
