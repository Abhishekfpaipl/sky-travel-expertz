<template>
    <div class="container">
        <h2 class="mb-4">Flights Option On Economy Class:</h2>

        <h3>(EX-DELHI Singapore Airlines)</h3>
        <table class="table table-striped mb-5">
            <thead class="table-secondary">
                <tr>
                    <th>#</th>
                    <th>Airline</th>
                    <th>Date</th>
                    <th>Departure</th>
                    <th>Arrival</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(flight, index) in delhiFlights" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ flight.airline }}</td>
                    <td>{{ flight.date }}</td>
                    <td>{{ flight.departure }}</td>
                    <td>{{ flight.arrival }}</td>
                </tr>
            </tbody>
        </table>

        <h3>(EX-MUMBAI Singapore Airlines)</h3>
        <table class="table table-striped mb-5">
            <thead class="table-secondary">
                <tr>
                    <th>#</th>
                    <th>Airline</th>
                    <th>Date</th>
                    <th>Departure</th>
                    <th>Arrival</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(flight, index) in mumbaiFlights" :key="index">
                    <td>{{ index + 1 }}</td>
                    <td>{{ flight.airline }}</td>
                    <td>{{ flight.date }}</td>
                    <td>{{ flight.departure }}</td>
                    <td>{{ flight.arrival }}</td>
                </tr>
            </tbody>
        </table>

        <div class="alert alert-info">
            <h4>Points to Remember:</h4>
            <ul>
                <li>Be mindful on the time and date of departure.</li>
                <li>China is 2.5 hrs. ahead of India.</li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            delhiFlights: [
                { airline: 'SQ 403', date: '17-09-2024', departure: 'DEL 21:55', arrival: 'SIN 06:10+1' },
                { airline: 'SQ 828', date: '18-09-2024', departure: 'SIN 07:55', arrival: 'PVG 13:25' },
                { airline: 'SQ 835', date: '22-09-2024', departure: 'PVG 19:10', arrival: 'SIN 00:30' },
                { airline: 'SQ 402', date: '23-09-2024', departure: 'SIN 02:35', arrival: 'DEL 05:40' },
            ],
            mumbaiFlights: [
                { airline: 'SQ 423', date: '17-09-2024', departure: 'BOM 23:40', arrival: 'SIN 07:40+1' },
                { airline: 'SQ 830', date: '18-09-2024', departure: 'SIN 09:30', arrival: 'PVG 15:05' },
                { airline: 'SQ 825', date: '23-09-2024', departure: 'PVG 00:35', arrival: 'SIN 05:55' },
                { airline: 'SQ 422', date: '23-09-2024', departure: 'SIN 07:40', arrival: 'BOM 13:30' },
            ],
        };
    },
};
</script>

<style scoped>
/* Add any additional custom styles here */
</style>