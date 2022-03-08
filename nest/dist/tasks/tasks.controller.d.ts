import { CreateTaskDto } from './dto/create-task.dto';
import { GetTasksFilterDto } from './dto/get-tasks-filter.dto';
import { UpdateTaskStatusDto } from './dto/update-task-status.dto';
import { TasksService } from './tasks.service';
import { Task } from './task.entity';
export declare class TasksController {
    private TasksService;
    constructor(TasksService: TasksService);
    getTasks(filterDto: GetTasksFilterDto): Promise<Task[]>;
    createTask(createTaskDto: CreateTaskDto): Promise<Task>;
    deleteTask(id: string): Promise<void>;
    updateTaskStatus(id: string, updateTaskStatusDto: UpdateTaskStatusDto): Promise<Task>;
}
