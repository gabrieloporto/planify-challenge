export interface Service {
  id: number;
  name: string;
  description: string;
  category: string;
}

export interface ServicesByCategory {
  [category: string]: Service[];
}

export interface SelectServiceProps {
  setGlobalSelectedService: (service: Service) => void;
  actualService: Service | null;
}

export interface Hour {
  date: string;
  serviceId: number;
  availableTimeslots: string[];
}

export type Width = {
  width: string;
};

export type FillColor = {
  fillColor: string;
};

export type Step = {
  step: string;
  setStep: (step: string) => void;
  hour: string | null;
};

export type SelectedHour = {
  setGlobalHour: (hour: string) => void;
  actualHour: string | null;
};

export type HeaderStep = {
  step: string;
};

export interface ConfirmType {
  service: string | undefined;
  date: string | null;
}
