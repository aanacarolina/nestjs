import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { TasksService } from './tasks.service';
import { TaskStatus } from './task-status.enum';
import { Task } from './task.entity';
import { filter } from 'rxjs';

@Controller('tasks') //essa é a rota raiz do módulo
export class TasksController {
  constructor(private TasksService: TasksService) {}

  //@Get('nomeDaRotaDepoisDeBarraTasks') decorator

  @Get()
  getTasks(@Query() filterDto: GetTasksFilterDto): Promise<Task[]> {
      return this.TasksService.getTasks(filterDto);
    }
  // }

  // @Get()
  // getAllTasks(@Query() filterDto: GetTasksFilterDto): Task[];
  // return this.TasksService.getAllTasks;


  //   @Get('/:id')
  //   getTaskById(@Param('id') id: string): Task {
  //     return this.tasksService.getTaskById(id);
  //   }

  @Post()
  createTask(@Body() createTaskDto: CreateTaskDto): Promise<Task> {
    return this.TasksService.createTask(createTaskDto);
  }

  @Delete('/:id')
  deleteTask(@Param('id') id: string): Promise<void> {
    return this.TasksService.deleteTask(id);
  }

  //   @Delete('/:id')
  //   deleteTask(@Param('id') id: string): void {
  //     return this.tasksService.deleteTask(id);
  //   }

  @Patch('/:id/status')
  updateTaskStatus(
    @Param('id') id: string,
    @Body() updateTaskStatusDto: UpdateTaskStatusDto,
  ): Promise<Task> {
    const { status } = updateTaskStatusDto;
    return this.TasksService.updateTaskStatus(id, status);
  }
}
