import { startOfHour } from 'date-fns';
import { getCustomRepository } from 'typeorm';

import AppError from '../errors/appError';

import Appointment from '../models/appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';
/**
 * Recebimento das informacoes (date e provider)
 * Tratativas de erros/excessoes (aqui e em rotas -> throw)
 * Acesso ao repositorio
 */

interface RequestDTO {
  provider_id: string;
  date: Date;
}

class CreateAppointmentService {
  public async execute({
    provider_id,
    date,
  }: RequestDTO): Promise<Appointment> {
    const appointmentsRepository = getCustomRepository(AppointmentsRepository);

    const appointmentDate = startOfHour(date);

    const findAppointmentinSameDate = await appointmentsRepository.findByDate(
      appointmentDate,
    );

    if (findAppointmentinSameDate) {
      throw new AppError('This appointment is booked');
    }

    const appointment = appointmentsRepository.create({
      provider_id,
      date: appointmentDate,
    });

    await appointmentsRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
