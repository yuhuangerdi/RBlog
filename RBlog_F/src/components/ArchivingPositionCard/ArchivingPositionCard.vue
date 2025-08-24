    <template>
    <div class="archiving-position-card">
        <!-- 年份导航栏 -->
        <div class="calendar-header">
        <button 
            class="nav-btn" 
            @click="changeYear(-1)"
            :disabled="currentYear <= minYear"
            aria-label="上一年"
        >
            <el-icon size="16"><ArrowLeft /></el-icon>
        </button>
        <h3>{{ currentYear }}年</h3>
        <button 
            class="nav-btn" 
            @click="changeYear(1)"
            :disabled="currentYear >= maxYear"
            aria-label="下一年"
        >
            <el-icon size="16"><ArrowRight /></el-icon>
        </button>
        </div>
        
        <!-- 月份网格 -->
        <div class="months-grid">
        <div 
            v-for="month in 12" 
            :key="month"
            class="month-item"
            :class="{ 
            'has-articles': hasArticles(currentYear, month),
            'active': isSelectedMonth(currentYear, month)
            }"
            @click="handleMonthClick(currentYear, month)"
            @mouseenter="handleMonthHover(month, true)"
            @mouseleave="handleMonthHover(month, false)"
        >
            <span class="month-text">{{ month }}月</span>
            <span v-if="hasArticles(currentYear, month)" class="indicator"></span>
        </div>
        </div>
    </div>
</template>

<script lang="ts" setup>
    import { ref, computed, onMounted } from "vue";
    import { ElIcon } from "element-plus";
    import { ArrowLeft, ArrowRight } from "@element-plus/icons-vue";

    // 接收父组件传递的参数
    const props = defineProps<{
        archiveDates: number[]; // 有文章的月份编码（格式：年份*12+月份）
        currentSelected: number; // 父组件当前选中的月份编码（用于高亮）
    }>();

    // 向父组件发射选中事件
    const emit = defineEmits<{
        (e: 'selectMonth', date: number): void;
    }>();

    const currentYear = ref(new Date().getFullYear());
    const hoveredMonth = ref<number | null>(null);

    // 计算有文章的最小/最大年份（用于限制年份导航）
    const minYear = computed(() => {
        return props.archiveDates.length 
            ? Math.min(...props.archiveDates.map(date => Math.floor(date / 12)))
            : currentYear.value;
    });

    const maxYear = computed(() => {
        return props.archiveDates.length
            ? Math.max(...props.archiveDates.map(date => Math.floor(date / 12)))
            : currentYear.value;
    });

    // 计算最新的月份编码（有文章的最后一个月）
    const latestDate = computed(() => {
        return props.archiveDates.length ? Math.max(...props.archiveDates) : 0;
    });

    // 组件挂载时定位到最新月份所在的年份
    onMounted(() => {
        if (props.archiveDates.length) {
            // 从最新月份编码中提取年份
            const latestYear = Math.floor(latestDate.value / 12);
            currentYear.value = latestYear;
        }
    });

    // 切换年份
    const changeYear = (step: number) => {
        currentYear.value += step;
    };

    // 处理月份悬停状态
    const handleMonthHover = (month: number, isHover: boolean) => {
        hoveredMonth.value = isHover ? month : null;
    };

    // 检查月份是否有文章
    const hasArticles = (year: number, month: number) => {
        const targetDate = year * 12 + (month - 1); // 转换为月份编码（0-11月）
        return props.archiveDates.includes(targetDate);
    };

    // 判断是否为父组件选中的月份
    const isSelectedMonth = (year: number, month: number) => {
        const targetDate = year * 12 + (month - 1);
        return targetDate === props.currentSelected;
    };

    // 点击月份时通知父组件选中的月份
    const handleMonthClick = (year: number, month: number) => {
        const targetDate = year * 12 + (month - 1);
        emit('selectMonth', targetDate); // 发射事件给父组件
    };
</script>

<style scoped>
    @import "../../styles/archiving-position-card/archiving-position-card.css";
</style>
